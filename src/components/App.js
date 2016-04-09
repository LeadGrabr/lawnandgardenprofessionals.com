import React, { Component, PropTypes } from 'react'
import { Theme } from '.'
import Helmet from 'react-helmet'
import { Container } from 'rebass'
import { setScreenSize } from '../redux/modules/app'
import { connect } from 'react-redux'
import { constants } from '../redux/modules/app'
const { small } = constants.BREAKPOINTS

@connect(() => ({}), { screenSize: setScreenSize })

export default class App extends Component {

    static propTypes = {
        children: PropTypes.node,
        screenSize: PropTypes.func.isRequired
    }

    componentDidMount() {
        // 🌎
        const { screenSize } = this.props
        const height = $(window).height()
        const width = $(window).width()
        window.addEventListener('resize', () => screenSize(height, width))
        screenSize(height, width)
    }

    render() {
        const { children } = this.props
        return (
            <div>
                <Helmet
                    link={[
                        /* eslint-disable max-len */
                        { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
                        { rel: 'stylesheet', href: '/style.css' },
                        { rel: 'shortcut icon', href: '/favicon.png' },
                        { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Oswald:400,700,300' }
                    ]}
                    meta={[
                        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi' }
                    ]}
                    script={[
                        { src: '//code.jquery.com/jquery-2.1.4.min.js' },
                        { src: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.7.0/lodash.min.js' }
                        /* eslint-enable max-len */
                    ]}
                    title="Benjamin Tatum"
                />
                <Theme>
                    <Container
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            maxWidth: small,
                            width: '100%'
                        }}
                    >
                        {children}
                    </Container>
                </Theme>
            </div>
        )
    }
}

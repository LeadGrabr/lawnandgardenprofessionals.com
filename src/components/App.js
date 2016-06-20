import React, { Component, PropTypes } from 'react'
import { BottomBar, Input, Navbar, Select, Theme } from 'components'
import { default as Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { setScreenSize } from 'redux/modules/app'

@connect(() => ({}), { screenSize: setScreenSize })

export default class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    screenSize: PropTypes.func.isRequired
  };

  static childContextTypes = {
    joifulReactForms: PropTypes.object
  };

  getChildContext () {
    return {
      joifulReactForms: {
        JoifulInput: {
          types: {
            text: Input,
            select: Select
          }
        }
      }
    }
  }

  componentDidMount () {
    const { screenSize } = this.props
    window.addEventListener(
      'resize',
      () => screenSize({
        height: window.innerHeight || $(window).height(),
        width: window.innerWidth || $(window).width()
      })
    )
    screenSize({
      height: window.innerHeight || $(window).height(),
      width: window.innerWidth || $(window).width()
    })
  }

  render () {
    return (
      <div>
        <Helmet
          link={[
            /* eslint-disable max-len */
            { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
            { rel: 'stylesheet', href: '/style.css' },
            { rel: 'shortcut icon', href: '/favicon.png' }
          ]}
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
          ]}
          script={[
            { src: '//code.jquery.com/jquery-2.1.4.min.js' }
            /* eslint-enable max-len */
          ]}
          title='Lawn & Garden Professionals'
          titleTemplate='Lawn & Garden Professionals - %s'
        />
        <Theme>
          <div>
            <Navbar />
            {this.props.children}
            <BottomBar />
          </div>
        </Theme>
      </div>
    )
  }
}

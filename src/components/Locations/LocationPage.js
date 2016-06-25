import { default as React, Component, PropTypes } from 'react'
import { find } from 'lodash'
import { locations } from 'data'
import { Block, Container, PageHeader } from 'components'
import { default as Error404 } from './404'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { default as styles } from './style.scss'
import { Base } from '@bentatum/rebass'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class ServicePage extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  // galleryCols () {
  //   switch (this.props.screenSize) {
  //     case 'xlarge':
  //     case 'large':
  //       return 6
  //     default:
  //       return 12
  //   }
  // }

  render () {
    const { params } = this.props
    const location = find(locations, { path: `locations/${params.location}` })
    if (!location) {
      return <Error404 />
    }
    const { header, img, path, title } = location
    const { STATIC_ASSETS } = process.env
    // const isMobile = screenSize === 'small' || screenSize === 'medium'
    return (
      <div>
        <PageHeader
          heading={header}
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: title, is: Link, to: `/${path}`, activeClassName: styles.activeNavItem }
          ]}
        />
        <Block backgroundColor='white'>
          <Container>
            <Base
              is='img'
              src={`${STATIC_ASSETS}/${img}`}
              style={{
                maxWidth: '100%',
                width: '100%'
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: require(`content/${path}.md`)
              }}
            />
          </Container>
        </Block>
      </div>
    )
  }
}

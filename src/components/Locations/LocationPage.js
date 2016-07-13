import { default as React, Component, PropTypes } from 'react'
import { find } from 'lodash'
import { locations } from 'data'
import { Block, ContactInfoBlock, Container, PageHeader, SecondaryNav } from 'components'
import { default as Error404 } from './404'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { default as styles } from './style.scss'
import { Base } from 'prefixed-rebass'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import { Flex, Box } from 'prefixed-reflexbox'
const { STATIC_ASSETS } = process.env

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class ServicePage extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  render () {
    const { params, screenSize } = this.props
    const location = find(locations, { path: `locations/${params.location}` })
    if (!location) {
      return <Error404 />
    }
    const { coordinates, header, img, path, title } = location
    const isMobile = screenSize === 'small' || screenSize === 'medium'
    return (
      <div>
        <PageHeader
          heading={header}
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: 'Locations', is: Link, to: '/locations' },
            { children: title, is: Link, to: `/${path}`, activeClassName: styles.activeNavItem }
          ]}
        />
        <Block backgroundColor='white'>
          <Container>
            <Flex wrap>
              <Box col={isMobile ? 12 : 8} pr={2}>
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
              </Box>
              <Box col={isMobile ? 12 : 4}>
                <SecondaryNav />
                <ContactInfoBlock />
              </Box>
            </Flex>
          </Container>
        </Block>
        <GoogleMapLoader
          containerElement={
            <div style={{ height: 300 }}>
              <div style={{ height: '100%' }} />
            </div>
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={15}
              defaultCenter={coordinates}
              onClick={() => console.log('click')}
            >
              <Marker position={coordinates} />
            </GoogleMap>
          }
        />
      </div>
    )
  }
}

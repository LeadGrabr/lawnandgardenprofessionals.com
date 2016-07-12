import { default as React, Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Block, ContactInfoBlock, Container, PageHeader, SecondaryNav, StickyNote } from 'components'
import { Link } from 'react-router'
import { default as styles } from './style.scss'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import { Base, Heading, Text } from 'rebass'
import { hours } from 'data'
import { Flex, Box } from 'prefixed-reflexbox'
import { default as Form } from './Form'

const coordinates = { lat: 42.195199, lng: -83.483737 }

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class ContactUs extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  render () {
    const { screenSize } = this.props
    const isMobile = screenSize === 'medium' || screenSize === 'small'
    return (
      <div>
        <PageHeader
          heading='Contact Us'
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: 'Contact', is: Link, to: '/contact', activeClassName: styles.activeNavItem }
          ]}
        />
        <Block backgroundColor='white'>
          <Container>
            <Flex wrap>
              <Box col={isMobile ? 12 : 8} pr={isMobile ? 0 : 2}>
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
                <Base mb={2}>
                  <Heading my={2}>Get in touch</Heading>
                  <Text mb={2}>
                    We would be delighted to serve you with our services, just use the form below or choose the services you are interested in and we will be in touch with you in few hours. We’re available from Monday to Saturday, 06:00-18:00 to take your call.
                  </Text>
                  <Form />
                </Base>
              </Box>
              <Box col={isMobile ? 12 : 4}>
                <StickyNote backgroundColor='primary' color='white' mb={2}>
                  <Heading color='white' level={3}>
                    Working Hours
                  </Heading>
                  <dl>
                    {hours.map(({ day, hours }) =>
                      <Flex justify='space-between'>
                        <dt>{day}</dt>
                        <dd>{hours}</dd>
                      </Flex>
                    )}
                  </dl>
                </StickyNote>
                <SecondaryNav />
                <ContactInfoBlock px={2} border borderColor='lightGray' />
              </Box>
            </Flex>
          </Container>
        </Block>
      </div>
    )
  }
}

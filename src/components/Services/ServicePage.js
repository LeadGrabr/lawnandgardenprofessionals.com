import { default as React, Component, PropTypes } from 'react'
import { find } from 'lodash'
import { services } from 'data'
import { PageHeader } from 'components'
import { default as Error404 } from './404'
import { Block, Container, Divider, Text } from '@bentatum/rebass'
import { Flex, Box } from 'reflexbox'
import { default as Nav } from './Nav'
import { default as ContactUsBlock } from './ContactUsBlock'
import { connect } from 'react-redux'
import { Link } from 'react-router'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class ServicePage extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  galleryCols () {
    const { screenSize } = this.props
    if (screenSize !== 'small' || screenSize !== 'medium') {
      return 6
    }
    return 12
  }

  render () {
    const service = find(services, { path: `services/${this.props.params.service}` })
    if (!service) {
      return <Error404 />
    }
    const { description, gallery, path, title } = service
    const galleryCols = this.galleryCols()
    const { STATIC_ASSETS } = process.env
    return (
      <div>
        <PageHeader
          heading={title}
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: 'Services', is: Link, to: '/services' },
            { children: title, is: Link, to: `/${path}` }
          ]}
        />
        <Block backgroundColor='white'>
          <Flex is={Container}>
            <Box col={8} pr={2}>
              <Text bold children={description} />
              <Divider />
              <div
                dangerouslySetInnerHTML={{
                  __html: require(`content/${path}.md`)
                }}
              />
              <If condition={gallery}>
                <Flex wrap>
                  {gallery.map(({ img, text }, key) =>
                    <Box
                      key={key}
                      col={galleryCols}
                      pl={key === 0 ? 0 : 1}
                      pr={key === gallery.length ? 0 : 1}
                      py={1}
                    >
                      <img
                        alt={text}
                        src={`${STATIC_ASSETS}${img}`}
                        style={{
                          maxWidth: '100%'
                        }}
                      />
                      <Text children={text} />
                    </Box>
                  )}
                </Flex>
              </If>
            </Box>
            <Box col={4}>
              <Nav />
              <ContactUsBlock />
            </Box>
          </Flex>
        </Block>
      </div>
    )
  }
}

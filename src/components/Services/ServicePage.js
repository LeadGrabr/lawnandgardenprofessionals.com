import { default as React, Component, PropTypes } from 'react'
import { find } from 'lodash'
import { services } from 'data'
import { Block, Container, PageHeader } from 'components'
import { default as Error404 } from './404'
import { Base, Divider, Text } from '@bentatum/rebass'
import { Flex, Box } from 'reflexbox'
import { default as Nav } from './Nav'
import { default as ContactUsBlock } from './ContactUsBlock'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { default as styles } from './style.scss'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class ServicePage extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  galleryCols () {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return 6
      default:
        return 12
    }
  }

  render () {
    const { screenSize, params } = this.props
    const service = find(services, { path: `services/${params.service}` })
    if (!service) {
      return <Error404 />
    }
    const { description, gallery, path, title } = service
    const galleryCols = this.galleryCols()
    const { STATIC_ASSETS } = process.env
    const isMobile = screenSize === 'small' || screenSize === 'medium'
    return (
      <div>
        <PageHeader
          heading={title}
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: 'Services', is: Link, to: '/services' },
            { children: title, is: Link, to: `/${path}`, activeClassName: styles.activeNavItem }
          ]}
        />
        <Block backgroundColor='white'>
          <Flex is={Container} wrap>
            <Box col={isMobile ? 12 : 8} pr={isMobile ? 0 : 2}>
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
                      pl={isMobile ? 0 : key === 0 ? 0 : 1}
                      pr={isMobile ? 0 : key === gallery.length ? 0 : 1}
                      py={1}
                    >
                      <Base
                        alt={text}
                        is='img'
                        src={`${STATIC_ASSETS}${img}`}
                        style={{
                          maxWidth: '100%'
                        }}
                        mb={1}
                      />
                      <Text children={text} />
                    </Box>
                  )}
                </Flex>
              </If>
            </Box>
            <Box col={isMobile ? 12 : 4}>
              <Nav />
              <ContactUsBlock />
            </Box>
          </Flex>
        </Block>
      </div>
    )
  }
}

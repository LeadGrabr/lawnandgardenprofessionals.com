import { default as React, Component, PropTypes } from 'react'
import { find } from 'lodash'
import { services } from 'data'
import { PageHeader } from 'components'
import { default as Error404 } from './404'
import { Container, Divider, Text } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as Nav } from './Nav'
import { default as ContactUsBlock } from './ContactUsBlock'
import { connect } from 'react-redux'

@connect(({ app: { isLargeScreen, isMediumScreen } }) => ({
  isLargeScreen, isMediumScreen
}))

export default class ServicePage extends Component {

  static propTypes = {
    isLargeScreen: PropTypes.bool,
    isMediumScreen: PropTypes.bool
  };

  galleryColumns () {
    if (this.props.isLargeScreen) {
      return 6
    }
    if (this.props.isMediumScreen) {
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
    const galleryColumns = this.galleryColumns()
    return (
      <div>
        <PageHeader
          heading={title}
          breadcrumbs={[
            { children: 'Home', href: '/' },
            { children: 'Services', href: '/services' },
            { children: title, href: `/${path}` }
          ]}
        />
        <Container>
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
                <Box key={key} col={galleryColumns} pl={key === 0 ? 0 : 1} pr={key === gallery.length ? 0 : 1}>
                  <img
                    alt={text}
                    src={`${process.env.STATIC_ASSETS}${img}`}
                    style={{
                      maxWidth: '100%'
                    }}
                  />
                  <Text children={text} />
                </Box>
              )}
            </Flex>
          </If>
          <Nav />
          <ContactUsBlock />
        </Container>
      </div>
    )
  }
}

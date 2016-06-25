import { default as React, Component, PropTypes } from 'react'
import { Block, Container, PageHeader, ServiceList } from 'components'
import { default as Nav } from './Nav'
import { default as ContactUsBlock } from './ContactUsBlock'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { default as styles } from './style.scss'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class AllServicesPage extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired
  };

  render () {
    const { screenSize } = this.props
    const isSmallOrMedium = screenSize === 'small' || screenSize === 'medium'
    return (
      <div>
        <PageHeader
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: 'Services', is: Link, to: '/services', activeClassName: styles.activeNavItem }
          ]}
          heading='Our Services'
        />
        <Block backgroundColor='white'>
          <Flex is={Container} wrap>
            <Box col={isSmallOrMedium ? 12 : 8} pr={isSmallOrMedium ? 0 : 2}>
              <ServiceList />
            </Box>
            <Box col={isSmallOrMedium ? 12 : 4}>
              <Nav />
              <ContactUsBlock />
            </Box>
          </Flex>
        </Block>
      </div>
    )
  }
}

import { default as React, Component, PropTypes } from 'react'
import { Block, Container, PageHeader, SecondaryNav } from 'components'
import { Flex, Box } from 'prefixed-reflexbox'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { default as styles } from './style.scss'
import { locations } from 'data'
import { default as Location } from './Location'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class AllLocationsPage extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired
  };

  render () {
    const { screenSize } = this.props
    const isSmall = screenSize === 'small'
    const isMobile = isSmall || screenSize === 'medium'
    return (
      <div>
        <PageHeader
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: 'Locations', is: Link, to: '/locations', activeClassName: styles.activeNavItem }
          ]}
          heading='Our Locations'
        />
        <Block backgroundColor='white'>
          <Container>
            <Flex wrap>
              <Box
                col={isMobile ? 12 : 8}
                pr={isMobile ? 0 : 2}
              >
                <Flex wrap>
                  {locations.map((location, key) =>
                    <Box
                      col={isSmall ? 12 : 6}
                      pr={key % 2 !== 0 ? 0 : 1}
                      pl={key % 2 === 0 ? 0 : 1}
                      pb={2}
                      key={key}
                    >
                      <Block border borderColor='lightGray' py={0}>
                        <Location {...location} />
                      </Block>
                    </Box>
                  )}
                </Flex>
              </Box>
              <Box col={isMobile ? 12 : 4}>
                <SecondaryNav />
              </Box>
            </Flex>
          </Container>
        </Block>
      </div>
    )
  }
}

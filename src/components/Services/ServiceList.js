import { default as React, Component, PropTypes } from 'react'
import { default as Service } from './Service'
import { connect } from 'react-redux'
import { Flex, Box } from 'reflexbox'
import { services } from 'data'

@connect(({ app: { isLargeScreen, isMediumScreen, isSmallScreen } }) => ({
  isLargeScreen, isMediumScreen, isSmallScreen
}))

export default class ServiceList extends Component {

  static propTypes = {
    isLargeScreen: PropTypes.bool,
    isMediumScreen: PropTypes.bool,
    isSmallScreen: PropTypes.bool
  };

  render () {
    const { isSmallScreen, isMediumScreen } = this.props
    const isColumn = isSmallScreen || isMediumScreen
    return (
      <Flex column={isColumn}>
        {services.map((props, key) =>
          <Box
            key={key}
            pl={isColumn ? 0 : (key === 0 ? 0 : 1)}
            pr={isColumn ? 0 : (key === services.length ? 0 : 1)}
          >
            <Service {...props} />
          </Box>
        )}
      </Flex>
    )
  }
}

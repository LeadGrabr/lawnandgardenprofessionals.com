import { default as React, Component, PropTypes } from 'react'
import { default as Service } from './Service'
import { connect } from 'react-redux'
import { Flex, Box } from 'reflexbox'
import { services } from 'data'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class ServiceList extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  boxCols () {
    switch (this.props.screenSize) {
      case 'xlarge':
        return 3
      case 'large':
        return 6
      default:
        return 12
    }
  }

  boxPR (key) {
    switch (this.props.screenSize) {
      case 'xlarge':
        return key % 3 === 0 && key !== 0 ? 0 : 1
      case 'large':
        return key % 2 === 0 ? 1 : 0
      default:
        return 0
    }
  }

  boxPL (key) {
    switch (this.props.screenSize) {
      case 'xlarge':
        return key === 0 || key % 4 === 0 ? 0 : 1
      case 'large':
        return key % 2 === 1 ? 1 : 0
      default:
        return 0
    }
  }

  render () {
    const cols = this.boxCols()
    return (
      <Flex wrap>
        {services.map((props, key) =>
          <Box
            col={cols}
            key={key}
            pr={this.boxPR(key)}
            pl={this.boxPL(key)}
          >
            <Service {...props} />
          </Box>
        )}
      </Flex>
    )
  }
}

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
      case 'large':
      case 'medium':
        return 6
      default:
        return 12
    }
  }

  boxPR (key) {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
      case 'medium':
        return key % 2 === 0 ? 1 : 0
      default:
        return 0
    }
  }

  boxPL (key) {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
      case 'medium':
        return key % 2 === 1 ? 1 : 0
      default:
        return 0
    }
  }

  render () {
    const cols = this.boxCols()
    return (
      <Flex wrap {...this.props}>
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

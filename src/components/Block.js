import { default as React, PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Block as RebassBlock } from '@bentatum/rebass'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class Block extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  py () {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return 3
      default:
        return 1
    }
  }

  render () {
    return <RebassBlock py={this.py()} {...this.props} />
  }
}

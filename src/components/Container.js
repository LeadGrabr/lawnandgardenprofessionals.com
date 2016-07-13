import { default as React, PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Container as RebassContainer } from 'prefixed-rebass'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class Container extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  render () {
    const { screenSize, ...props } = this.props
    return (
      <RebassContainer
        px={screenSize === 'small' || screenSize === 'medium' ? 1 : 2}
        {...props}
      />
    )
  }
}

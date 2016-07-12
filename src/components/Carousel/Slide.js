import { default as React, Component, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Heading, Text } from 'rebass'
import { Link } from 'react-router'
import { connect } from 'react-redux'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class Slide extends Component {

  static propTypes = {
    children: PropTypes.node,
    cta: PropTypes.object.isRequired,
    heading: PropTypes.object.isRequired,
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
    style: PropTypes.object
  };

  height () {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return 450
      case 'medium':
        return 216
      default:
        return 194
    }
  }

  render () {
    const { children, cta, heading, style } = this.props
    return (
      <Flex
        align='center'
        column
        justify='center'
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: this.height(),
          textAlign: 'center',
          width: '100%',
          ...style
        }}
      >
        <Heading color='white' mb={1} {...heading} />
        <Text color='white' is={Link} {...cta} />
        {children}
      </Flex>
    )
  }
}

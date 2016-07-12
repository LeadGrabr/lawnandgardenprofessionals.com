import { default as React, PropTypes } from 'react'
import { Base } from 'rebass'

const Circle = ({ borderColor, ...props }, { colors: { lightGray, white } }) =>
  <Base
    circle
    p={1}
    style={{
      backgroundColor: white,
      borderColor: borderColor || lightGray,
      borderStyle: 'solid',
      borderWidth: 1,
      display: 'inline-block'
    }}
    {...props}
  />

Circle.contextTypes = {
  colors: PropTypes.object.isRequired
}

Circle.propTypes = {
  borderColor: PropTypes.string
}

export default Circle

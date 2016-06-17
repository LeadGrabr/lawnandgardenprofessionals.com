import { default as React, PropTypes } from 'react'
import { Base } from 'rebass'

const Circle = (props, { colors: { gray, white } }) =>
  <Base
    circle
    mr={2}
    p={2}
    style={{
      backgroundColor: white,
      borderColor: gray,
      borderStyle: 'solid',
      borderWidth: 1,
      display: 'inline-block'
    }}
    {...props}
  />

Circle.contextTypes = {
  colors: PropTypes.object.isRequired
}

export default Circle

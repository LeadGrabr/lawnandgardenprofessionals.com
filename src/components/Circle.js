import { default as React, PropTypes } from 'react'
import { Base } from '@bentatum/rebass'

const Circle = (props, { colors: { lightGray, white } }) =>
  <Base
    circle
    mr={2}
    p={1}
    style={{
      backgroundColor: white,
      borderColor: lightGray,
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

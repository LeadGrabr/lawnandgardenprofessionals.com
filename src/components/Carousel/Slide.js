import { default as React, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Heading, Text } from '@bentatum/rebass'
import { Link } from 'react-router'

const Slide = ({ children, cta, heading, style }) =>
  <Flex
    align='center'
    column
    justify='center'
    style={{
      backgroundSize: 'cover',
      height: 600,
      textAlign: 'center',
      width: '100%',
      ...style
    }}
  >
    <Heading color='white' mb={1} {...heading} />
    <Text color='white' is={Link} {...cta} />
    {children}
  </Flex>

Slide.propTypes = {
  children: PropTypes.node,
  cta: PropTypes.object.isRequired,
  heading: PropTypes.object.isRequired,
  style: PropTypes.object
}

export default Slide

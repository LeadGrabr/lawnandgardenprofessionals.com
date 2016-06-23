import { default as React, PropTypes } from 'react'
import { Arrow, Avatar, Base, Text } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as QuoteIcon } from 'react-icons/lib/fa/quote-left'

const Testimonial = ({ author, img, location, text }, { colors: { primary, white } }) =>
  <Base py={2}>
    <Flex
      pb={2}
      style={{
        borderBottomColor: white,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        position: 'relative'
      }}
    >
      <Box mr={1}>
        <QuoteIcon style={{ color: primary }} size={30} />
      </Box>
      <Text mt={0} children={text} />
      <Arrow
        direction='down'
        style={{
          bottom: -8,
          left: 26,
          position: 'absolute'
        }}
      />
    </Flex>
    <Flex p={2}>
      <Avatar
        circle
        mr={2}
        size={50}
        src={`${process.env.STATIC_ASSETS}${img}`}
      />
      <Box>
        <Text color='white' bold mb={0} children={author} />
        <Text
          color='primary'
          bold
          mt={0}
          small
          children={location}
          style={{ textTransform: 'uppercase' }}
        />
      </Box>
    </Flex>
  </Base>

Testimonial.propTypes = {
  author: PropTypes.string.isRequired
}

Testimonial.contextTypes = {
  colors: PropTypes.object.isRequired
}

export default Testimonial

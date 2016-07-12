import { default as React, PropTypes } from 'react'
import { Arrow, Avatar, Base, Text } from 'rebass'
import { Flex, Box } from 'prefixed-reflexbox'
import { default as QuoteIcon } from 'react-icons/lib/fa/quote-left'
import { default as TextTruncate } from 'react-text-truncate'
import { Link } from 'react-router'
const { STATIC_ASSETS } = process.env

const Testimonial = ({ author, location, path, text, thumbnail }, { colors: { primary, white } }) =>
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
      <Text is={TextTruncate} truncateText='…' mt={0} text={text} line={3} />
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
        src={`${STATIC_ASSETS}/${thumbnail}`}
      />
      <Box>
        <Text is={Link} to={path} color='white' bold mb={0} children={author} />
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
  author: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
}

Testimonial.contextTypes = {
  colors: PropTypes.object.isRequired
}

export default Testimonial

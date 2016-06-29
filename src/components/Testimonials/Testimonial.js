import { default as React, PropTypes } from 'react'
import { Base, Divider, Heading, Text } from '@bentatum/rebass'
import { Link } from 'react-router'
const { STATIC_ASSETS } = process.env

const Testimonial = ({ author, img, location, path, text }) =>
  <div>
    <img
      src={`${STATIC_ASSETS}/${img}`}
      style={{
        width: '100%',
        maxWidth: '100%'
      }}
    />
    <Base m={2}>
      <Heading>
        {author}
      </Heading>
      <Text color='primary'>
        {location}
      </Text>
      <Divider />
      <Text children={text} />
      <Divider />
      <Link to={path}>
        Read More
      </Link>
    </Base>
  </div>

Testimonial.propTypes = {
  author: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Testimonial

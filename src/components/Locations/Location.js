import { default as React, PropTypes } from 'react'
import { Base, Divider, Heading, Text } from 'rebass'
import { Link } from 'react-router'
const { STATIC_ASSETS } = process.env

const Location = ({ header, img, path, title }) =>
  <div>
    <img
      src={`${STATIC_ASSETS}/${img}`}
      style={{
        width: '100%',
        maxWidth: '100%'
      }}
    />
    <Base m={2}>
      <Heading level={3} mb={2}>
        {header}
      </Heading>
      <Text color='primary'>
        {title}
      </Text>
      <Divider />
      <Link to={path}>
        Read More
      </Link>
    </Base>
  </div>

Location.propTypes = {
  header: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Location

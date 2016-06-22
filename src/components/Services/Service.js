import { default as React, PropTypes } from 'react'
import { Base, Heading, Text } from 'rebass'
import { Link } from 'react-router'

const Service = ({ description, img, path, title, ...props }) =>
  <Base {...props}>
    <img
      src={`${process.env.STATIC_ASSETS}${img}`}
      style={{
        maxWidth: '100%',
        width: '100%'
      }}
    />
    <Heading my={2} level={4} children={title} />
    <Text my={2} children={description} />
    <Text small bold my={2} style={{ textTransform: 'uppercase' }}>
      <Link to={path} children={title} />
    </Text>
  </Base>

Service.propTypes = {
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Service

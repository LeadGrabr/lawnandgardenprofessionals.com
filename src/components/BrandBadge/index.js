import { default as React, createElement, PropTypes } from 'react'
import { Base, Heading, Text } from 'rebass'
import { Circle } from 'components'
import { default as styles } from './style.scss'

const BrandBadge = ({ icon, heading, body, style, ...props }, { colors: { primary, lightGray, white } }) =>
  <Base
    className={styles.outer}
    p={2}
    mb={2}
    style={{
      backgroundColor: white,
      borderColor: lightGray,
      borderStyle: 'solid',
      borderWidth: 1,
      ...style
    }}
    {...props}
  >
    <Circle
      className={styles.circle}
      children={createElement(icon, {
        style: { color: primary },
        className: styles.icon
      })}
    />
    <Heading
      level={5}
      my={2}
      style={{ textTransform: 'uppercase' }}
      children={heading}
    />
    <Text children={body} />
  </Base>

BrandBadge.contextTypes = {
  colors: PropTypes.object.isRequired
}

BrandBadge.propTypes = {
  icon: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default BrandBadge

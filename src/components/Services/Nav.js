import { default as React, PropTypes } from 'react'
import { Menu, NavItem } from 'rebass'
import { Link } from 'react-router'
import { services } from 'data'
import { default as styles } from './style.scss'

const ServicesNav = (props, { colors: { lightGray, white } }) => {
  const navItemProps = {
    activeClassName: styles.activeNavItem,
    backgroundColor: lightGray,
    style: {
      borderColor: white,
      borderStyle: 'solid',
      borderWidth: 1
    }
  }
  return (
    <Menu>
      <NavItem {...navItemProps} is={Link} to='/services'>
        All Services
      </NavItem>
      {services.map(({ path, title }, key) =>
        <NavItem {...navItemProps} is={Link} to={`/${path}`} key={key}>
          {title}
        </NavItem>
      )}
    </Menu>
  )
}

ServicesNav.contextTypes = {
  colors: PropTypes.object.isRequired
}

export default ServicesNav

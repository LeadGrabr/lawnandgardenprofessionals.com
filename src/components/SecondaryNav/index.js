import { default as React } from 'react'
import { Menu, NavItem } from '@bentatum/rebass'
import { Link } from 'react-router'
import { default as styles } from './style.scss'

const navItemProps = {
  activeClassName: styles.activeNavItem,
  backgroundColor: 'lightGray',
  is: Link,
  style: {
    marginBottom: 2
  }
}

const SecondaryNav = () =>
  <Menu>
    <NavItem {...navItemProps} to='/instant-quote'>
      Get an instant quote
    </NavItem>
    <NavItem {...navItemProps} to='/faqs'>
      Frequently asked questions
    </NavItem>
    <NavItem {...navItemProps} to='/contact'>
      Contact us
    </NavItem>
    <NavItem {...navItemProps} to='/testimonials'>
      Testimonials
    </NavItem>
    <NavItem {...navItemProps} to='/locations'>
      Locations
    </NavItem>
  </Menu>

export default SecondaryNav

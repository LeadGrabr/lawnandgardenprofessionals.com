import { default as React } from 'react'
import { Menu, NavItem } from '@bentatum/rebass'
import { Link } from 'react-router'

const LocationsNav = () =>
  <Menu>
    <NavItem is={Link} to='/locations'>
      Locations
    </NavItem>
    <NavItem is={Link} to='/instant-quote'>
      Get an instant quote
    </NavItem>
    <NavItem is={Link} to='/faqs'>
      Frequently asked questions
    </NavItem>
    <NavItem is={Link} to='/contact'>
      Contact us
    </NavItem>
  </Menu>

export default LocationsNav

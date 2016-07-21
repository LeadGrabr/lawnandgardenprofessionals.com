import { default as React, Component, PropTypes } from 'react'
import { Arrow, Menu, NavItem } from 'prefixed-rebass'
import { default as Collapse } from 'react-collapse'
import {
  locations as locationsData,
  services as servicesData,
  testimonials as testimonialsData
} from 'data'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { default as styles } from './style.scss'
import { Flex, Box } from 'prefixed-reflexbox'

const initialState = {
  services: false,
  locations: false,
  testimonials: false
}

@connect(() => ({}), { pushState: push })

export default class PrimaryNav extends Component {

  static propTypes = {
    column: PropTypes.bool,
    pushState: PropTypes.func.isRequired
  };

  state = initialState

  handleClick ({ target: { name } }) {
    if (!this.state.hasOwnProperty(name)) {
      return this.setState(
        initialState,
        () => this.props.pushState(`/${name}`)
      )
    }
    const directive = !this.state[name]
    return this.setState(initialState, () =>
      this.setState({ [name]: directive })
    )
  }

  render () {
    const { column, ...props } = this.props
    const { locations, services, testimonials } = this.state
    const navItemProps = {
      onClick: ::this.handleClick
    }
    const dropDownProps = {
      mb: 0,
      style: !column ? {
        position: 'absolute',
        zIndex: 100
      } : null
    }
    return (
      <Flex column={column} className={styles.outer} {...props}>
        <Box>
          <NavItem name='services' {...navItemProps}>
            Services <Arrow direction={services ? 'up' : 'down'} />
          </NavItem>
          <Collapse isOpened={services}>
            <Menu {...dropDownProps}>
              {servicesData.map(({ path, title }, key) =>
                <NavItem {...navItemProps} name={path} key={key}>
                  {title}
                </NavItem>
              )}
            </Menu>
          </Collapse>
        </Box>
        <Box>
          <NavItem name='locations' {...navItemProps}>
            Locations <Arrow direction={locations ? 'up' : 'down'} />
          </NavItem>
          <Collapse isOpened={locations}>
            <Menu {...dropDownProps}>
              {locationsData.map(({ path, title }, key) =>
                <NavItem {...navItemProps} name={path} key={key}>
                  {title}
                </NavItem>
              )}
            </Menu>
          </Collapse>
        </Box>
        <Box>
          <NavItem name='faqs' {...navItemProps}>
            FAQs
          </NavItem>
        </Box>
        <Box>
          <NavItem name='testimonials' {...navItemProps}>
            Testimonials <Arrow direction={testimonials ? 'up' : 'down'} />
          </NavItem>
          <Collapse isOpened={testimonials}>
            <Menu {...dropDownProps}>
              {testimonialsData.map(({ author, path, location }, key) =>
                <NavItem {...navItemProps} name={path} key={key}>
                  {`${author} (${location})`}
                </NavItem>
              )}
            </Menu>
          </Collapse>
        </Box>
        <Box>
          <NavItem name='instant-quote' {...navItemProps}>
            Instant Quote
          </NavItem>
        </Box>
        <Box>
          <NavItem name='contact' {...navItemProps}>
            Contact
          </NavItem>
        </Box>
      </Flex>
    )
  }
}

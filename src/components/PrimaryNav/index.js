import { default as React, Component, PropTypes } from 'react'
import { Arrow, Menu, NavItem } from 'rebass'
import { default as Collapse } from 'react-collapse'
import { services as servicesData } from 'data'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { default as styles } from './style.scss'
import { setDrawer } from 'redux/modules/navbar'

const initialState = {
  services: false,
  locations: false,
  testimonials: false
}

@connect(() => ({}), { pushState: push, setDrawer })

export default class PrimaryNav extends Component {

  static propTypes = {
    pushState: PropTypes.func.isRequired,
    setDrawer: PropTypes.func.isRequired
  };

  state = initialState

  handleClick ({ target: { name } }) {
    if (this.state[name] === true || !this.state.hasOwnProperty(name)) {
      return this.setState(
        initialState,
        () => {
          this.props.pushState(`/${name}`)
          this.props.setDrawer(false)
        }
      )
    }
    return this.setState({ [name]: true })
  }

  render () {
    const { services, locations, testimonials } = this.state
    const sharedProps = {
      onClick: this.handleClick.bind(this)
    }
    return (
      <Menu backgroundColor='black' color='white' className={styles.outer}>
        <NavItem name='services' {...sharedProps}>
          Services <Arrow direction={services ? 'up' : 'down'} />
        </NavItem>
        <Collapse isOpened={services}>
          <Menu mb={0}>
            {servicesData.map(({ path, title }, key) =>
              <NavItem {...sharedProps} name={path} key={key}>
                {title}
              </NavItem>
            )}
          </Menu>
        </Collapse>
        <NavItem name='locations' {...sharedProps}>
          Locations <Arrow direction={locations ? 'up' : 'down'} />
        </NavItem>
        <Collapse isOpened={locations}>
          <Menu mb={0}>
            <NavItem>
              123
            </NavItem>
          </Menu>
        </Collapse>
        <NavItem name='faqs' {...sharedProps}>
          FAQs
        </NavItem>
        <NavItem name='testimonials' {...sharedProps}>
          Testimonials <Arrow direction={testimonials ? 'up' : 'down'} />
        </NavItem>
        <Collapse isOpened={testimonials}>
          <Menu mb={0}>
            <NavItem>
              123
            </NavItem>
          </Menu>
        </Collapse>
        <NavItem name='instant-quote' {...sharedProps}>
          Instant Quote
        </NavItem>
        <NavItem name='contact' {...sharedProps}>
          Contact
        </NavItem>
      </Menu>
    )
  }
}

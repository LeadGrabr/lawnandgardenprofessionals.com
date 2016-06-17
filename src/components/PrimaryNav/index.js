import { default as React, Component, PropTypes } from 'react'
import { Arrow, Menu, NavItem } from 'rebass'
import { Link } from 'react-router'
import { default as Collapse } from 'react-collapse'
import { services as servicesData } from 'data'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { default as styles } from './style.scss'

@connect(() => ({}), { pushState: push })

export default class PrimaryNav extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
  };

  state = {}

  handleClick ({ target }) {
    if (this.state[target.name]) {
      return this.props.pushState(`/${target.name}`)
    }
    return this.setState({
      [target.name]: true
    })
  }

  render () {
    const { services, locations, testimonials } = this.state
    return (
      <Menu backgroundColor='black' color='white' className={styles.outer}>
        <NavItem
          onClick={::this.handleClick}
          name='services'
        >
          Services <Arrow direction={services ? 'up' : 'down'} />
        </NavItem>
        <Collapse isOpened={services}>
          <Menu mb={0}>
            {servicesData.map(({ path, title }) =>
              <NavItem is={Link} to={path}>
                {title}
              </NavItem>
            )}
          </Menu>
        </Collapse>
        <NavItem
          onClick={::this.handleClick}
          name='locations'
        >
          Locations <Arrow direction={locations ? 'up' : 'down'} />
        </NavItem>
        <Collapse isOpened={locations}>
          <Menu mb={0}>
            <NavItem>
              123
            </NavItem>
          </Menu>
        </Collapse>
        <NavItem is={Link} to='faqs'>
          FAQs
        </NavItem>
        <NavItem
          onClick={::this.handleClick}
          name='testimonials'
        >
          Testimonials <Arrow direction={testimonials ? 'up' : 'down'} />
        </NavItem>
        <Collapse isOpened={testimonials}>
          <Menu mb={0}>
            <NavItem>
              123
            </NavItem>
          </Menu>
        </Collapse>
        <NavItem is={Link} to='instant-quote'>
          Instant Quote
        </NavItem>
        <NavItem is={Link} to='contact'>
          Contact
        </NavItem>
      </Menu>
    )
  }
}

import { default as React, Component, PropTypes } from 'react'
import { Slider, Slides, Dots, PrevArrow, NextArrow } from 'better-react-flex-slick'
import { services } from 'data'
import { default as Service } from './Service'
import { connect } from 'react-redux'
import { chunk } from 'lodash'
import { Flex, Box } from 'prefixed-reflexbox'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class ServiceListCarousel extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  servicesPerSlide () {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return 4
      case 'medium':
        return 2
      default:
        return 1
    }
  }

  boxCols () {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return 3
      case 'medium':
        return 6
      default:
        return 12
    }
  }

  boxPl (i, services) {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
      case 'medium':
        return i === 0 ? 0 : 1
      default:
        return 0
    }
  }

  boxPr (i, services) {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
      case 'medium':
        return i === services.length ? 0 : 1
      default:
        return 0
    }
  }

  render () {
    const boxProps = {
      col: this.boxCols()
    }
    return (
      <Slider>
        <PrevArrow size={0} />
        <Slides>
          {chunk(services, this.servicesPerSlide()).map((services, slideIndex) =>
            <Flex key={slideIndex}>
              {services.map((service, serviceIndex) =>
                <Box {...boxProps} pl={this.boxPl(serviceIndex, services)} pr={this.boxPr(serviceIndex, services)} key={serviceIndex}>
                  <Service {...service} />
                </Box>
              )}
            </Flex>
          )}
        </Slides>
        <NextArrow size={0} />
        <Dots />
      </Slider>
    )
  }
}

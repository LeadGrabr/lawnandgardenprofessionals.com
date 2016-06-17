import { default as React, PropTypes } from 'react'
import { Dots, Slider, PrevArrow, Slides, NextArrow } from 'react-flex-slick'
import { default as slideOne } from './lawn-1.jpg'
import { default as slideTwo } from './lawn-2.jpg'
import { Flex } from 'reflexbox'

const arrowStyle = {
  marginTop: -10,
  position: 'absolute',
  zIndex: 1,
  top: '50%'
}

const slideProps = {
  align: 'center',
  justify: 'center'
}

const Carousel = (props, { colors: { black, white } }) => {
  const arrowProps = {
    color: black,
    size: 20
  }
  const slideStyle = {
    backgroundSize: 'cover',
    color: white,
    height: 600,
    textAlign: 'center',
    width: '100%'
  }
  return (
    <Slider style={{ position: 'relative' }}>
      <PrevArrow
        {...arrowProps}
        style={{
          ...arrowStyle,
          left: 0
        }}
      />
      <Slides>
        <Flex
          {...slideProps}
          style={{
            ...slideStyle,
            backgroundImage: `url(${slideOne})`
          }}
        >
          <h2>Professional Gardening, Landscaping<br />& Maintenance Services</h2>
        </Flex>
        <Flex
          {...slideProps}
          style={{
            ...slideStyle,
            backgroundImage: `url(${slideTwo})`
          }}
        >
          <h2>Making your surroundings<br />beautiful for 40 years</h2>
        </Flex>
      </Slides>
      <NextArrow
        {...arrowProps}
        style={{
          ...arrowStyle,
          right: 0
        }}
      />
      <Dots />
    </Slider>
  )
}

Carousel.contextTypes = {
  colors: PropTypes.object.isRequired
}

export default Carousel

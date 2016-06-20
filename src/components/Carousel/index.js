import { default as React, PropTypes } from 'react'
import { Dots, Slider, PrevArrow, Slides, NextArrow } from 'react-flex-slick'
import { Flex } from 'reflexbox'
import { default as Slide } from './Slide'
import { default as ArrowIcon } from 'react-icons/lib/fa/arrow-circle-right'
import { Space } from 'rebass'

const arrowStyle = {
  marginTop: -10,
  position: 'absolute',
  zIndex: 1,
  top: '50%'
}

const Carousel = (props, { colors: { black, white } }) => {
  const arrowProps = {
    color: black,
    size: 20
  }
  const arrowIconProps = {
    size: 13,
    color: white
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
        <Slide
          heading={{
            children: <span>Making your surroundings<br />beautiful for 40 years</span>
          }}
          cta={{
            children: (
              <Flex align='center'>
                Lets get started
                <Space />
                <ArrowIcon {...arrowIconProps} />
              </Flex>
            ),
            to: '/services',
            style: { textTransform: 'uppercase' }
          }}
          style={{
            backgroundImage: `url(${process.env.STATIC_ASSETS}/lawn-1.jpg)`
          }}
        />
        <Slide
          heading={{
            children: <span>Professional Gardening, Landscaping<br />& Maintenance Services</span>
          }}
          cta={{
            children: (
              <Flex align='center'>
                See all services
                <Space />
                <ArrowIcon {...arrowIconProps} />
              </Flex>
            ),
            to: '/services',
            style: { textTransform: 'uppercase' }
          }}
          style={{
            backgroundImage: `url(${process.env.STATIC_ASSETS}/lawn-2.jpg)`
          }}
        />
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

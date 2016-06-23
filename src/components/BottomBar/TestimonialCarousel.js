import { default as React } from 'react'
import { Slider, Slides, Dots, PrevArrow, NextArrow } from 'better-react-flex-slick'
import { testimonials } from 'data'
import { default as Testimonial } from './Testimonial'

const TestimonialCarousel = () =>
  <Slider>
    <PrevArrow size={0} />
    <Slides>
      {testimonials.map((props, key) =>
        <Testimonial key={key} {...props} />
      )}
    </Slides>
    <NextArrow size={0} />
    <Dots />
  </Slider>

export default TestimonialCarousel

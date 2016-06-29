import React from 'react'
import * as v from './components'
import { IndexRoute, Route } from 'react-router'

export default (
  <Route path='/' component={v.App}>
    <IndexRoute component={v.Home} />
    <Route path='contact' component={v.ContactUs} />
    <Route path='faqs' component={v.FAQs} />
    <Route path='instant-quote' component={v.InstantQuote} />
    <Route path='locations' component={v.Locations}>
      <IndexRoute component={v.AllLocationsPage} />
      <Route path=':location' component={v.LocationPage} />
    </Route>
    <Route path='services' component={v.AllServicesPage} />
    <Route path='services/:service' component={v.ServicePage} />
    <Route path='testimonials' component={v.Testimonials}>
      <IndexRoute component={v.AllTestimonialsPage} />
      <Route path=':testimonial' component={v.TestimonialPage} />
    </Route>
    <Route path='*' component={v.Error404} />
  </Route>
)

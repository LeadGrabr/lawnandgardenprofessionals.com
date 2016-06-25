import React from 'react'
import * as v from './components'
import { IndexRoute, Route } from 'react-router'

export default (
  <Route path='/' component={v.App}>
    <IndexRoute component={v.Home} />
    <Route path='contact' component={v.Contact} />
    <Route path='faqs' component={v.FAQs} />
    <Route path='instant-quote' component={v.InstantQuote} />
    <Route path='locations' component={v.AllLocationsPage} />
    <Route path='locations/:location' component={v.LocationPage} />
    <Route path='services' component={v.AllServicesPage} />
    <Route path='services/:service' component={v.ServicePage} />
    <Route path='testimonials' component={v.Testimonials}>
      <IndexRoute component={v.AllTestimonials} />
      <Route path=':testimonial' component={v.Testimonial} />
    </Route>
    <Route path='*' component={v.Error404} />
  </Route>
)

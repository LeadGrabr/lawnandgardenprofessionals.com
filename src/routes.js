import React from 'react'
import * as v from './components'
import { IndexRoute, Route } from 'react-router'

export default (
  <Route path='/' component={v.App}>
    <IndexRoute component={v.Home} />
    <Route path='contact' component={v.Contact} />
    <Route path='faqs' component={v.FAQs} />
    <Route path='instant-quote' component={v.InstantQuote} />
    <Route path='locations' component={v.Locations}>
      <IndexRoute component={v.AllLocations} />
      <Route path=':location' component={v.Location} />
    </Route>
    <Route path='services' component={v.Services}>
      <IndexRoute component={v.AllServicesPage} />
      <Route path=':service' component={v.ServicePage} />
    </Route>
    <Route path='testimonials' component={v.Testimonials}>
      <IndexRoute component={v.AllTestimonials} />
      <Route path=':testimonial' component={v.Testimonial} />
    </Route>
    <Route path='*' component={v.Error404} />
  </Route>
)

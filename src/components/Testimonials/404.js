import { default as React } from 'react'
import { PageHeader } from 'components'

const Testimonial404 = () =>
  <div>
    <PageHeader
      heading={'Sorry we can\'t find that testimonial'}
      breadcrumbs={[
        { children: 'Home', href: '/' },
        { children: 'Testimonials', href: '/testimonials' }
      ]}
    />
  </div>

export default Testimonial404

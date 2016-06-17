import { default as React } from 'react'
import { services } from 'data'
import { PageHeader } from 'components'

const AllServices = () =>
  <div>
    <PageHeader
      breadcrumbs={[
        { children: 'Home', href: '/' },
        { children: 'Services', href: '/services' }
      ]}
      heading='Our Services'
    />
    {services.map(() =>
      <div />
    )}
  </div>

export default AllServices

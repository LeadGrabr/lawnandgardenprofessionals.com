import { default as React } from 'react'
import { PageHeader } from 'components'

const Service404 = () =>
  <div>
    <PageHeader
      heading={'Sorry we can\'t find that service'}
      breadcrumbs={[
        { children: 'Home', href: '/' },
        { children: 'Services', href: '/services' }
      ]}
    />
  </div>

export default Service404

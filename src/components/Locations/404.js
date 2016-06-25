import { default as React } from 'react'
import { PageHeader } from 'components'

const Location404 = () =>
  <div>
    <PageHeader
      heading={'Sorry we can\'t find that location'}
      breadcrumbs={[
        { children: 'Home', href: '/' },
        { children: 'Locations', href: '/locations' }
      ]}
    />
  </div>

export default Location404

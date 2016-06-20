import { default as React } from 'react'
import { find } from 'lodash'
import { services } from 'data'
import { PageHeader } from 'components'
import { default as Error404 } from './404'

const ServicePage = ({ params }) => {
  const service = find(services, { path: `services/${params.service}` })
  if (!service) {
    return <Error404 />
  }
  return (
    <div>
      <PageHeader
        heading={service.title}
        breadcrumbs={[
          { children: 'Home', href: '/' },
          { children: 'Services', href: '/services' },
          { children: service.title, href: `/${service.path}` }
        ]}
      />
    </div>
  )
}

export default ServicePage

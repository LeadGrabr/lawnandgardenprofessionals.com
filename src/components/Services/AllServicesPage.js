import { default as React } from 'react'
import { services } from 'data'
import { PageHeader, Service } from 'components'
import { Container } from 'rebass'
import { default as Nav } from './Nav'

const AllServicesPage = () =>
  <div>
    <PageHeader
      breadcrumbs={[
        { children: 'Home', href: '/' },
        { children: 'Services', href: '/services' }
      ]}
      heading='Our Services'
    />
    <Container>
      {services.map((props, key) => <Service {...props} />)}
      <Nav />
    </Container>
  </div>

export default AllServicesPage

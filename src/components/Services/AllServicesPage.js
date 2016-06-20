import { default as React } from 'react'
import { services } from 'data'
import { PageHeader, Service } from 'components'
import { Container } from 'rebass'
import { default as Nav } from './Nav'
import { default as ContactUsBlock } from './ContactUsBlock'

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
      <ContactUsBlock />
    </Container>
  </div>

export default AllServicesPage

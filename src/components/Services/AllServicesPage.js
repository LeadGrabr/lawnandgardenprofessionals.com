import { default as React } from 'react'
import { services } from 'data'
import { PageHeader, Service, StickyNote } from 'components'
import { Button, Container, Heading } from 'rebass'
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
      <StickyNote backgroundColor='primary'>
        <Heading color='white' mb={2}>
          Have questions about our services?
        </Heading>
        <Button style={{ borderWidth: 2, borderStyle: 'solid' }}>
          Contact us
        </Button>
      </StickyNote>
    </Container>
  </div>

export default AllServicesPage

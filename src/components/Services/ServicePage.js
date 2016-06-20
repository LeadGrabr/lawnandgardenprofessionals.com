import { default as React } from 'react'
import { find } from 'lodash'
import { services } from 'data'
import { PageHeader } from 'components'
import { default as Error404 } from './404'
import { Container, Divider, Text } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as Nav } from './Nav'
import { default as ContactUsBlock } from './ContactUsBlock'

const ServicePage = ({ params }) => {
  const service = find(services, { path: `services/${params.service}` })
  if (!service) {
    return <Error404 />
  }
  const { description, gallery, path, title } = service
  return (
    <div>
      <PageHeader
        heading={title}
        breadcrumbs={[
          { children: 'Home', href: '/' },
          { children: 'Services', href: '/services' },
          { children: title, href: `/${path}` }
        ]}
      />
      <Container>
        <Text bold children={description} />
        <Divider />
        <div
          dangerouslySetInnerHTML={{
            __html: require(`content/${path}.md`)
          }}
        />
        <If condition={gallery}>
          <Flex>
            {gallery.map(({ img, text }, key) =>
              <Box key={key}>
                <img
                  alt={text}
                  src={`${process.env.STATIC_ASSETS}${img}`}
                />
                <Text children={text} />
              </Box>
            )}
          </Flex>
        </If>
        <Nav />
        <ContactUsBlock />
      </Container>
    </div>
  )
}

export default ServicePage

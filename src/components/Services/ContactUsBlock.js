import { default as React } from 'react'
import { StickyNote } from 'components'
import { Heading, Button } from 'rebass'

const ContactUsBlock = () =>
  <StickyNote backgroundColor='primary'>
    <Heading color='white' mb={2}>
      Have questions about our services?
    </Heading>
    <Button style={{ borderWidth: 2, borderStyle: 'solid' }}>
      Contact us
    </Button>
  </StickyNote>

export default ContactUsBlock

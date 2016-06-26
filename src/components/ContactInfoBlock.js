import { default as React } from 'react'
import { Block } from 'components'
import { Heading, Text } from '@bentatum/rebass'

const ContactInfoBlock = () =>
  <Block border>
    <Heading style={{ textTransform: 'uppercase' }}>
      Contact Info
    </Heading>
    <Text>
      847 Sumpter Road #411<br />
      Belleville, MI 48111
    </Text>
    <Text bold>
      Call us NOW
    </Text>
    <Text>
      734-768-4475
    </Text>
  </Block>

export default ContactInfoBlock

import { default as React } from 'react'
import { Block } from 'components'
import { Heading, Text } from 'prefixed-rebass'

const ContactInfoBlock = (props) =>
  <Block border borderColor='lightGray' px={2} {...props}>
    <Heading level={5} style={{ textTransform: 'uppercase' }} mb={2}>
      Contact Info
    </Heading>
    <Text mb={2} color='gray'>
      847 Sumpter Road #411<br />
      Belleville, MI 48111
    </Text>
    <Text bold color='gray'>
      Call us NOW
    </Text>
    <Text color='primary' bold>
      734-768-4475
    </Text>
  </Block>

export default ContactInfoBlock

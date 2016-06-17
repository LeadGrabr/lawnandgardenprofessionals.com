import { default as React, PropTypes } from 'react'
import { Base, Breadcrumbs, Container, Heading } from 'rebass'
import { Flex } from 'reflexbox'

const PageHeader = ({ breadcrumbs, heading }, { colors: { lightGray } }) =>
  <Base
    mb={3}
    style={{
      backgroundColor: lightGray,
      backgroundImage: `url(${process.env.STATIC_ASSETS}/leaves-pattern.png)`,
      backgroundRepeat: 'repeat repeat'
    }}
  >
    <Flex
      is={Container}
      align='center'
      justify='space-between'
      style={{ minHeight: 150 }}
    >
      <Heading level={2} size={1} children={heading} />
      <If condition={breadcrumbs}>
        <Breadcrumbs links={breadcrumbs} />
      </If>
    </Flex>
  </Base>

PageHeader.propTypes = {
  breadcrumbs: PropTypes.arrayOf([PropTypes.object]),
  heading: PropTypes.string.isRequired
}

PageHeader.contextTypes = {
  colors: PropTypes.object.isRequired
}

export default PageHeader

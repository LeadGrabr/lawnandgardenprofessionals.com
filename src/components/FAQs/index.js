import { default as React } from 'react'
import { faqs } from 'data'
import { Container, Heading, Menu, NavItem, Text } from '@bentatum/rebass'
import { PageHeader } from 'components'
import { Link } from 'react-router'
import { default as styles } from './style.scss'

const FAQs = () => {
  const sharedNavItemProps = {
    activeClassName: styles.activeNavItem,
    is: Link
  }
  return (
    <div>
      <PageHeader
        heading='Frequently Asked Questions'
        breadcrumbs={[
          { children: 'Home', href: '/' },
          { children: 'FAQs', href: '/faqs' }
        ]}
      />
      <Container>
        {faqs.map(({ question, answer }, key) =>
          <div key={key}>
            <Heading py={2} level={3} children={question} />
            <Text py={2} children={answer} />
          </div>
        )}
        <Menu>
          <NavItem
            {...sharedNavItemProps}
            to='/about'
            children='About us'
          />
          <NavItem
            {...sharedNavItemProps}
            to='/instant-quote'
            children='Get an instant quote'
          />
          <NavItem
            {...sharedNavItemProps}
            to='/faqs'
            children='Frequently asked questions'
          />
          <NavItem
            {...sharedNavItemProps}
            to='/contact'
            children='Contact us'
          />
        </Menu>
      </Container>
    </div>
  )
}

export default FAQs

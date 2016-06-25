import { default as React } from 'react'
import { faqs } from 'data'
import { Heading, Menu, NavItem, Text } from '@bentatum/rebass'
import { Block, Container, PageHeader } from 'components'
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
          { children: 'Home', is: Link, to: '/' },
          { children: 'FAQs', is: Link, to: '/faqs', activeClassName: styles.activeNavItem }
        ]}
      />
      <Block backgroundColor='white'>
        <Container>
          {faqs.map(({ question, answer }, key) =>
            <div key={key}>
              <Heading pb={2} level={3} children={question} />
              <Text pb={2} children={answer} />
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
      </Block>
    </div>
  )
}

export default FAQs

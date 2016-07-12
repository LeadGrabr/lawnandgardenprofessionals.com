import { default as React, Component } from 'react'
import { faqs } from 'data'
import { Heading, Text } from 'rebass'
import { Block, Container, PageHeader, SecondaryNav } from 'components'
import { Link } from 'react-router'
import { default as styles } from './style.scss'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class FAQs extends Component {
  render () {
    const { screenSize } = this.props
    const isMobile = screenSize === 'medium' || screenSize === 'small'
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
            <Flex wrap>
              <Box col={isMobile ? 12 : 8} pr={isMobile ? 0 : 1}>
                {faqs.map(({ question, answer }, key) =>
                  <div key={key}>
                    <Heading pb={2} level={3} children={question} />
                    <Text pb={2} children={answer} />
                  </div>
                )}
              </Box>
              <Box col={isMobile ? 12 : 4}>
                <SecondaryNav />
              </Box>
            </Flex>
          </Container>
        </Block>
      </div>
    )
  }
}

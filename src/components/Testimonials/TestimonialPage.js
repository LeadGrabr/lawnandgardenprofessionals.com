import { default as React, Component, PropTypes } from 'react'
import { find } from 'lodash'
import { testimonials } from 'data'
import { Block, ContactInfoBlock, Container, PageHeader, SecondaryNav } from 'components'
import { default as Error404 } from './404'
import { Text } from '@bentatum/rebass'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { default as styles } from './style.scss'
import { default as BraggingRights } from './BraggingRights'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class TestimonialPage extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  render () {
    const testimonial = find(testimonials, { path: `testimonials/${this.props.params.testimonial}` })
    if (!testimonial) {
      return <Error404 />
    }
    const { author, location, path, text } = testimonial
    const title = `${author} (${location})`
    const { screenSize } = this.props
    const isMobile = screenSize === 'small' || screenSize === 'medium'
    return (
      <div>
        <PageHeader
          heading={title}
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: 'Testimonials', is: Link, to: '/testimonials' },
            { children: title, is: Link, to: `/${path}`, activeClassName: styles.activeNavItem }
          ]}
        />
        <Block backgroundColor='white'>
          <Container>
            <Flex>
              <Box col={isMobile ? 12 : 8} pr={isMobile ? 0 : 2}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: require(`content/${path}.md`)
                  }}
                />
                <Text children={text} />
              </Box>
              <Box col={isMobile ? 12 : 4}>
                <SecondaryNav />
                <ContactInfoBlock />
              </Box>
            </Flex>
          </Container>
        </Block>
        <BraggingRights />
      </div>
    )
  }
}

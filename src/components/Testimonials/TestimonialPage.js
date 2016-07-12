import { default as React, Component, PropTypes } from 'react'
import { find } from 'lodash'
import { testimonials } from 'data'
import { Block, ContactInfoBlock, Container, PageHeader, SecondaryNav } from 'components'
import { default as Error404 } from './404'
import { Text, Base } from 'prefixed-rebass'
import { Flex, Box } from 'prefixed-reflexbox'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { default as styles } from './style.scss'
import { default as BraggingRights } from './BraggingRights'
const { STATIC_ASSETS } = process.env

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
    const { author, img, location, path, text } = testimonial
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
            <Flex wrap>
              <Box col={isMobile ? 12 : 8} pr={isMobile ? 0 : 2}>
                <Base
                  is='img'
                  src={`${STATIC_ASSETS}/${img}`}
                  alt={author}
                  style={screenSize === 'small' ? { width: '100%' } : { float: 'left' }}
                  mr={2}
                  mb={1}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: require(`content/${path}.md`)
                  }}
                />
                <Text children={text} />
              </Box>
              <Box pt={isMobile ? 2 : 0} col={isMobile ? 12 : 4}>
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

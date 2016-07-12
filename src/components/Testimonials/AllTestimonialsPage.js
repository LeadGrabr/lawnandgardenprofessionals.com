import { default as React, Component, PropTypes } from 'react'
import { Block, ContactInfoBlock, Container, PageHeader, SecondaryNav } from 'components'
import { Flex, Box } from 'prefixed-reflexbox'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { default as styles } from './style.scss'
import { testimonials } from 'data'
import { default as Testimonial } from './Testimonial'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class AllTestimonialsPage extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired
  };

  render () {
    const { screenSize } = this.props
    const isSmall = screenSize === 'small'
    const isMobile = isSmall || screenSize === 'medium'
    return (
      <div>
        <PageHeader
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: 'Testimonials', is: Link, to: '/testimonials', activeClassName: styles.activeNavItem }
          ]}
          heading='Testimonials'
        />
        <Block backgroundColor='white'>
          <Container>
            <Flex wrap>
              <Box
                col={isMobile ? 12 : 8}
                pr={isMobile ? 0 : 2}
              >
                <Flex wrap>
                  {testimonials.map((testimonial, key) =>
                    <Box
                      col={isSmall ? 12 : 6}
                      pr={key % 2 !== 0 ? 0 : 1}
                      pl={key % 2 === 0 ? 0 : 1}
                      pb={2}
                      key={key}
                    >
                      <Block border borderColor='lightGray' py={0}>
                        <Testimonial {...testimonial} />
                      </Block>
                    </Box>
                  )}
                </Flex>
              </Box>
              <Box col={isMobile ? 12 : 4}>
                <SecondaryNav />
                <ContactInfoBlock />
              </Box>
            </Flex>
          </Container>
        </Block>
      </div>
    )
  }
}

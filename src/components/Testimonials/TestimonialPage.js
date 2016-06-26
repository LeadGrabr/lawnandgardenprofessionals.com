import { default as React, Component, PropTypes } from 'react'
import { find } from 'lodash'
import { testimonials } from 'data'
import { Block, Container, PageHeader } from 'components'
import { default as Error404 } from './404'
import { Text } from '@bentatum/rebass'
// import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { default as styles } from './style.scss'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class TestimonialPage extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  // galleryColumns () {
  //   const { screenSize } = this.props
  //   if (screenSize === 'large') {
  //     return 6
  //   }
  //   if (screenSize === 'medium') {
  //     return 6
  //   }
  //   return 12
  // }

  render () {
    const testimonial = find(testimonials, { path: `testimonials/${this.props.params.testimonial}` })
    if (!testimonial) {
      return <Error404 />
    }
    const { author, location, path, text } = testimonial
    // const { STATIC_ASSETS } = process.env
    const title = `${author} (${location})`
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
            <div
              dangerouslySetInnerHTML={{
                __html: require(`content/${path}.md`)
              }}
            />
            <Text children={text} />
          </Container>
        </Block>
      </div>
    )
  }
}

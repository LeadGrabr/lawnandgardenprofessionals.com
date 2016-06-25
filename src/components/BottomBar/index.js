import { default as React, Component, PropTypes } from 'react'
import { Divider, Heading, Space, Text } from '@bentatum/rebass'
import { default as InfoIcon } from 'react-icons/lib/md/info'
import { Flex, Box } from 'reflexbox'
import { default as HamburgerIcon } from 'react-icons/lib/md/menu'
import { default as CaretRightIcon } from 'react-icons/lib/fa/caret-right'
import { default as CommentIcon } from 'react-icons/lib/fa/comment'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { default as TestimonialCarousel } from './TestimonialCarousel'
import { Block, Container } from 'components'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class BottomBar extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  static contextTypes = {
    breakpoints: PropTypes.object.isRequired,
    colors: PropTypes.object.isRequired,
    scale: PropTypes.array.isRequired
  };

  render () {
    const { screenSize } = this.props
    const { colors: { gray, primary, white }, scale } = this.context
    const listItemStyle = {
      borderColor: gray,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
      paddingBottom: scale[2],
      paddingTop: scale[2]
    }
    const caretProps = {
      size: 10,
      style: {
        color: gray
      }
    }
    const { STATIC_ASSETS } = process.env
    const isMobile = screenSize === 'small' || screenSize === 'medium'
    return (
      <div>
        <Block
          backgroundColor='darkGray'
          color='gray'
          px={2}
          my={0}
          py={3}
        >
          <Flex
            is={Container}
            px={0}
            style={{ width: '100%' }}
            wrap
          >
            <Box col={isMobile ? 12 : 6} mb={3} pr={isMobile ? 0 : 2}>
              <Flex align='center' mb={3}>
                <InfoIcon style={{ color: primary }} />
                <Space />
                <Heading level={4} color={white} style={{ textTransform: 'uppercase' }}>
                  Lawn and Garden Professionals
                </Heading>
              </Flex>
              <img
                alt='Lawn And Garden Professionals'
                src={`${STATIC_ASSETS}/logo.png`}
              />
              <Text mt={2}>
                The leading local landscaping and lawn care service in the Ann Arbor, Washtenaw, Canton, and Ypsilanti areas.
              </Text>
            </Box>
            <Box col={isMobile ? 12 : 6} mb={3}>
              <Flex align='center' mb={2}>
                <HamburgerIcon style={{ color: primary }} />
                <Space />
                <Heading level={4} color={white} style={{ textTransform: 'uppercase' }}>
                  Quick Links
                </Heading>
              </Flex>
              <ul
                style={{
                  listStyleType: 'none',
                  paddingLeft: 0
                }}
              >
                <li style={listItemStyle}>
                  <Link to='instant-quote'>
                    <CaretRightIcon {...caretProps} /> Get an Instant Quote
                  </Link>
                </li>
                <li style={listItemStyle}>
                  <Link to='services'>
                    <CaretRightIcon {...caretProps} /> All Services
                  </Link>
                </li>
                <li style={listItemStyle}>
                  <Link to='faqs'>
                    <CaretRightIcon {...caretProps} /> FAQs
                  </Link>
                </li>
              </ul>
            </Box>
            <Box auto style={{ maxWidth: '100%' }}>
              <Flex align='center' mb={2}>
                <CommentIcon style={{ color: primary }} />
                <Space />
                <Heading level={4} color={white} style={{ textTransform: 'uppercase' }}>
                  Happy Clients
                </Heading>
              </Flex>
              <TestimonialCarousel />
            </Box>
          </Flex>
        </Block>
        <Block
          m={0}
          py={2}
          backgroundColor='black'
          color='gray'
          style={{
            textAlign: 'center'
          }}
        >
          <Text small>© 2016 Lawn and Garden Professionals. All Rights Reserved</Text>
          <Text small>847 Sumpter Road #411, Belleville, MI 48111</Text>
          <Text small>Call Us Now at 734-786-4475</Text>
          <Divider width={100} color='gray' />
        </Block>
      </div>
    )
  }
}

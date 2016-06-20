import { default as React, Component, PropTypes } from 'react'
import { Arrow, Avatar, Base, Block, Container, Divider, Heading, Space, Text } from 'rebass'
import { default as InfoIcon } from 'react-icons/lib/md/info'
import { Flex, Box } from 'reflexbox'
import { default as HamburgerIcon } from 'react-icons/lib/md/menu'
import { default as CaretRightIcon } from 'react-icons/lib/fa/caret-right'
import { default as CommentIcon } from 'react-icons/lib/fa/comment'
import { Link } from 'react-router'
import { testimonials } from 'data'
import { default as QuoteIcon } from 'react-icons/lib/fa/quote-left'
import { connect } from 'react-redux'

@connect(({ app: { width } }) => ({ width }))

export default class BottomBar extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired
  };

  static contextTypes = {
    breakpoints: PropTypes.object.isRequired,
    colors: PropTypes.object.isRequired,
    scale: PropTypes.array.isRequired
  };

  render () {
    const {
      breakpoints: { small },
      colors: { gray, primary, white },
      scale
    } = this.context

    const isSmall = this.props.width <= small

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
      color: gray,
      size: 10
    }

    return (
      <div>
        <Block
          backgroundColor='darkGray'
          color='gray'
          px={2}
          mb={0}
          py={3}
        >
          <Flex
            column={isSmall}
            is={Container}
            style={{ width: '100%' }}
            px={0}
            wrap={!isSmall}
          >
            <Box col={isSmall ? 12 : 6} mb={3} pr={2}>
              <Flex align='center' mb={3}>
                <InfoIcon color={primary} />
                <Space />
                <Heading level={4} color={white} style={{ textTransform: 'uppercase' }}>
                  Lawn and Garden Professionals
                </Heading>
              </Flex>
              <img
                alt='Lawn And Garden Professionals'
                src={`${process.env.STATIC_ASSETS}/logo.png`}
              />
              <Text mt={2}>
                The leading local landscaping and lawn care service in the Ann Arbor, Washtenaw, Canton, and Ypsilanti areas.
              </Text>
            </Box>
            <Box col={isSmall ? 12 : 6} mb={3}>
              <Flex align='center' mb={2}>
                <HamburgerIcon color={primary} />
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
            <Box auto>
              <Flex align='center' mb={3}>
                <CommentIcon color={primary} />
                <Space />
                <Heading level={4} color={white} style={{ textTransform: 'uppercase' }}>
                  Happy Clients
                </Heading>
              </Flex>
              {testimonials.map(({ author, img, location, text }, key) =>
                <Base py={2} key={key}>
                  <Flex
                    pb={2}
                    style={{
                      borderBottomColor: white,
                      borderBottomStyle: 'solid',
                      borderBottomWidth: 1,
                      position: 'relative'
                    }}
                  >
                    <Box mr={1}>
                      <QuoteIcon color={primary} size={30} />
                    </Box>
                    <Text mt={0} children={text} />
                    <Arrow
                      direction='down'
                      style={{
                        bottom: -8,
                        left: 26,
                        position: 'absolute'
                      }}
                    />
                  </Flex>
                  <Flex p={2}>
                    <Avatar
                      circle
                      mr={2}
                      size={50}
                      src={`${process.env.STATIC_ASSETS}${img}`}
                    />
                    <Box>
                      <Text color='white' bold mb={0} children={author} />
                      <Text
                        color='primary'
                        bold
                        mt={0}
                        small
                        children={location}
                        style={{ textTransform: 'uppercase' }}
                      />
                    </Box>
                  </Flex>
                </Base>
              )}
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

import { default as React, PropTypes } from 'react'
import { Arrow, Avatar, Base, Block, Container, Heading, Space, Text } from 'rebass'
import { default as InfoIcon } from 'react-icons/lib/md/info'
import { Flex, Box } from 'reflexbox'
import { default as HamburgerIcon } from 'react-icons/lib/md/menu'
import { default as CaretRightIcon } from 'react-icons/lib/fa/caret-right'
import { default as CommentIcon } from 'react-icons/lib/fa/comment'
import { Link } from 'react-router'
import { testimonials } from 'data'
import { default as QuoteIcon } from 'react-icons/lib/fa/quote-left'

const BottomBar = (props, { colors: { gray, primary, white }, scale }) => {
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
      <Block backgroundColor='darkGray' color='gray' px={2} py={3}>
        <Container style={{ width: '100%' }} px={0}>
          <Box mb={3}>
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
          <Box mb={3}>
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
          <Box>
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
        </Container>
      </Block>
      <Block backgroundColor='black'>
        <Text>© 2016 Lawn and Garden Professionals. All Rights Reserved</Text>
        <Text>847 Sumpter Road #411, Belleville, MI 48111</Text>
        <Text>Call Us Now at 734-786-4475</Text>
      </Block>
    </div>
  )
}

BottomBar.contextTypes = {
  colors: PropTypes.object.isRequired,
  scale: PropTypes.array.isRequired
}

export default BottomBar

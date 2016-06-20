import { default as React, PropTypes } from 'react'
import { BrandBadge, Carousel, Circle, LeadForm } from 'components'
import { Flex, Box } from 'reflexbox'
import { default as InfoIcon } from 'react-icons/lib/md/info'
import { Base, Block, Button, Container, Divider, Heading, Space, Text } from 'rebass'
import { default as MaleIcon } from 'react-icons/lib/fa/male'
import { default as lawnGardenImg } from './lawn-and-garden-professionals-of-ann-arbor-michigan@small.jpg'
import { default as leavesPattern } from './leaves-pattern.png'
import { default as TrophyIcon } from 'react-icons/lib/fa/trophy'
import { default as ArrowUpIcon } from 'react-icons/lib/fa/arrow-up'
import { default as DollarIcon } from 'react-icons/lib/fa/dollar'
import { default as MapPinIcon } from 'react-icons/lib/md/location-on'
import { services } from 'data'
import { Link } from 'react-router'
import { Parallax } from 'react-parallax'

const Home = (props, { colors: { black, lightGray, primary, white }, shadows }) =>
  <div>
    <Carousel />
    <Flex column>
      <div style={{ boxShadow: shadows[0] }}>
        <Block m={0} backgroundColor='black'>
          <Flex
            p={2}
            is={Container}
            align='center'
          >
            <InfoIcon color={primary} />
            <Space x={2} />
            <Heading style={{ color: white }}>
              Get an Instant Quote
            </Heading>
          </Flex>
        </Block>
        <Block py={1} m={0} backgroundColor='darkGray'>
          <Container px={0}>
            <LeadForm />
          </Container>
        </Block>
        <Block p={2} backgroundColor='white'>
          <Container>
            <Heading size={1} level={2}>
              Lawn and Garden Professionals
            </Heading>
            <Text mb={2}>Gardening, Landscaping and Maintenance Services</Text>
            <img
              alt
              src={lawnGardenImg}
              style={{ width: '100%' }}
            />
          </Container>
        </Block>
        <Block p={2} backgroundColor='white'>
          <Container>
            <Flex align='center'>
              <Circle>
                <MaleIcon color={primary} size={20} />
              </Circle>
              <Heading level={3}>
                Lawn Care, Landscaping, Leaf Removal
              </Heading>
            </Flex>
            <Block
              borderLeft
              borderColor='gray'
              py={3}
              style={{
                marginTop: -10,
                marginLeft: 24,
                paddingLeft: 38,
                paddingRight: 38
              }}
            >
              <Heading level={5} big mb={3}>
                We Specialize in Your Lawn
              </Heading>
              <Text>
                If you're looking for lawn care, landscaping, or leaf removal, look no further. Lawn &amp; Garden Professionals is a national brand with local partners. We hand pick lawn and garden partners in your area to ensure only the highest quality of work. Our partners look to us to grow their business, and we look to them to guarantee their landscaping work. Our customers get the best of both worlds!
              </Text>
            </Block>
          </Container>
        </Block>
      </div>
      <Block
        backgroundColor='lightGray'
        m={0}
        px={2}
        style={{
          backgroundImage: `url(${leavesPattern})`,
          backgroundRepeat: 'repeat repeat'
        }}
      >
        <Container>
          <Flex mb={2}>
            <Box col={4}>
              <Base
                rounded
                p={2}
                backgroundColor='primary'
                style={{ textAlign: 'center' }}
              >
                <Heading level={4} style={{ color: white }}>
                  Why you should choose us
                </Heading>
              </Base>
            </Box>
          </Flex>
          <BrandBadge
            icon={TrophyIcon}
            heading='Trustworthy'
            body='We handpick our lawn, garden, and landscaping partners in each service area to make sure you get the best mowing, cleanup, or leaf removal that money can buy.'
          />
          <BrandBadge
            icon={ArrowUpIcon}
            heading='Experienced'
            body={'We have been mowing lawns and servicing gardens for decades. Your lawn and garden are the first thing people see, and we make sure it\'s a good first impression.'}
          />
          <BrandBadge
            icon={MapPinIcon}
            heading='Locally Owned'
            body='Local first service is getting harder to find in the landscaping industry. We make sure you can talk to a local specialist face to face, all week long.'
          />
          <BrandBadge
            icon={DollarIcon}
            heading='Simple Pricing'
            body={'Prices for lanscaping shouldn\'t be complicated. Contact us now for an easy quote on your next lawn care project. We respond the same day.'}
          />
        </Container>
      </Block>
      <Block py={3} m={2} backgroundColor='white'>
        <Container>
          <Heading level={2} mb={2} style={{ textAlign: 'center' }}>
            Services we offer
          </Heading>
          <Divider
            width={100}
            color={primary}
            mb={3}
          />
          <Flex wrap>
            {services.map(({ description, img, path, title }) =>
              <Box auto col={12}>
                <img
                  src={`${process.env.STATIC_ASSETS}${img}`}
                  style={{
                    width: '100%'
                  }}
                />
                <Heading my={2} level={4} children={title} />
                <Text my={2} children={description} />
                <Text small bold my={2} style={{ textTransform: 'uppercase' }}>
                  <Link to={path} children={title} />
                </Text>
              </Box>
            )}
          </Flex>
        </Container>
      </Block>
      <Block mb={3}>
        <Parallax bgImage={`${process.env.STATIC_ASSETS}/lawn-and-garden-professionals-of-ann-arbor-michigan.jpg`}>
          <Flex
            is={Container}
            column
            align='center'
            justify='center'
            py={4}
          >
            <Heading
              mb={2}
              level={2}
              color={white}
              style={{
                textAlign: 'center'
              }}
            >
              Residential and Commercial property owners trust Lawn and Garden Professionals to make sure their landscaping shines
            </Heading>
            <Button>
              Explore our services
            </Button>
          </Flex>
        </Parallax>
      </Block>
    </Flex>
  </div>

Home.contextTypes = {
  colors: PropTypes.object.isRequired,
  shadows: PropTypes.array.isRequired
}

export default Home

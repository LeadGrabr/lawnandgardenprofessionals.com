import { default as React, Component, PropTypes } from 'react'
import { BrandBadgeList, Carousel, Circle, LeadForm, ServiceList } from 'components'
import { Flex, Box } from 'reflexbox'
import { default as InfoIcon } from 'react-icons/lib/md/info'
import { Base, Block, Button, Container, Divider, Heading, Space, Text } from 'rebass'
import { default as MaleIcon } from 'react-icons/lib/fa/male'
import { default as lawnGardenImg } from './lawn-and-garden-professionals-of-ann-arbor-michigan@small.jpg'
import { default as leavesPattern } from './leaves-pattern.png'
import { Parallax } from 'react-parallax'
import { connect } from 'react-redux'

@connect(({ app: { isLargeScreen, isMediumScreen, isSmallScreen } }) => ({
  isLargeScreen, isMediumScreen, isSmallScreen
}))

export default class Home extends Component {

  static propTypes = {
    isLargeScreen: PropTypes.bool,
    isMediumScreen: PropTypes.bool,
    isSmallScreen: PropTypes.bool
  };

  static contextTypes = {
    colors: PropTypes.object.isRequired,
    shadows: PropTypes.array.isRequired
  };

  render () {
    const { colors: { primary, white }, shadows } = this.context
    const { isMediumScreen, isSmallScreen } = this.props
    return (
      <div>
        <Carousel />
        <Flex column>
          <Block m={0} backgroundColor='black'>
            <Flex
              p={2}
              is={Container}
              align='center'
            >
              <InfoIcon style={{ color: primary }} />
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
          <Block my={0} p={2} backgroundColor='white' style={{ boxShadow: shadows[0] }}>
            <Flex is={Container} wrap px={0}>
              <Box
                col={isMediumScreen || isSmallScreen ? 12 : 6}
                pr={isMediumScreen || isSmallScreen ? 0 : 1}
                mb={isMediumScreen || isSmallScreen ? 2 : 0}
              >
                <Heading size={1} level={2}>
                  Lawn and Garden Professionals
                </Heading>
                <Text mb={2}>Gardening, Landscaping and Maintenance Services</Text>
                <img
                  alt
                  src={lawnGardenImg}
                  style={{ width: '100%' }}
                />
              </Box>
              <Box
                col={isMediumScreen || isSmallScreen ? 12 : 6}
                pl={isMediumScreen || isSmallScreen ? 0 : 1}
              >
                <Flex align='center'>
                  <Circle>
                    <MaleIcon style={{ color: primary }} size={20} />
                  </Circle>
                  <Heading level={3} color='gray' style={{ textTransform: 'uppercase' }}>
                    Lawn Care, Landscaping, Leaf Removal
                  </Heading>
                </Flex>
                <Block
                  borderLeft
                  borderColor='lightGray'
                  py={3}
                  mb={0}
                  style={{
                    marginTop: -10,
                    marginLeft: 20,
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
              </Box>
            </Flex>
          </Block>
          <Block
            backgroundColor='lightGray'
            m={0}
            px={2}
            style={{
              backgroundImage: `url(${leavesPattern})`,
              backgroundRepeat: 'repeat repeat',
              zIndex: -10
            }}
          >
            <Container px={0}>
              <Flex mb={2}>
                <Box col={isSmallScreen ? 12 : 6} pr={isSmallScreen ? 0 : 1}>
                  <Base
                    rounded
                    p={2}
                    backgroundColor='primary'
                    style={{ textAlign: 'center' }}
                  >
                    <Heading level={4} style={{ color: white, position: 'relative', top: -2 }}>
                      Why you should choose us
                    </Heading>
                  </Base>
                </Box>
              </Flex>
              <BrandBadgeList />
            </Container>
          </Block>
          <Block py={3} m={2} backgroundColor='white'>
            <Container px={0}>
              <Heading level={2} mb={2} style={{ textAlign: 'center' }}>
                Services we offer
              </Heading>
              <Divider
                width={100}
                color={primary}
                mb={3}
              />
              <ServiceList />
            </Container>
          </Block>
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
        </Flex>
      </div>
    )
  }
}

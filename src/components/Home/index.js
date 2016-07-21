import { default as React, Component, PropTypes } from 'react'
import { Block, Carousel, Container, IconHeadingBlock, ServiceListCarousel } from 'components'
import { Flex, Box } from 'prefixed-reflexbox'
import { Base, Button, Divider, Heading, Text } from 'prefixed-rebass'
import { default as MaleIcon } from 'react-icons/lib/fa/male'
import { Parallax } from 'react-parallax'
import { connect } from 'react-redux'
import { default as BrandBadgeList } from './BrandBadgeList'
import { default as GetAnInstantQuoteBlock } from './GetAnInstantQuoteBlock'
const { STATIC_ASSETS } = process.env

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class Home extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  static contextTypes = {
    colors: PropTypes.object.isRequired,
    shadows: PropTypes.array.isRequired
  };

  render () {
    const { colors: { primary, white }, shadows } = this.context
    const { screenSize } = this.props
    const isMobile = screenSize === 'medium' || screenSize === 'small'
    return (
      <div>
        <Carousel />
        <GetAnInstantQuoteBlock />
        <Block backgroundColor='white' style={{ boxShadow: shadows[0], zIndex: 2 }}>
          <Flex is={Container} wrap>
            <Box
              col={isMobile ? 12 : 6}
              pr={isMobile ? 0 : 1}
              mb={isMobile ? 2 : 0}
            >
              <Heading size={1} level={2} mb={1}>
                Lawn and Garden Professionals
              </Heading>
              <Text mb={2}>
                Gardening, Landscaping and Maintenance Services
              </Text>
              <div style={{ maxHeight: 246, overflow: 'hidden' }}>
                <img
                  alt='Person on riding mower'
                  src={`${STATIC_ASSETS}/lawn-and-garden-professionals-of-ann-arbor-michigan@small.jpg`}
                  style={{
                    maxWidth: '100%',
                    width: '100%'
                  }}
                />
              </div>
            </Box>
            <Box
              col={isMobile ? 12 : 6}
              pl={isMobile ? 0 : 1}
              pb={2}
            >
              <IconHeadingBlock
                icon={MaleIcon}
                heading='Lawn Care, Landscaping, Leaf Removal'
              >
                <Heading level={5} size={2} mb={2}>
                  We Specialize in Your Lawn
                </Heading>
                <Text>
                  If you're looking for lawn care, landscaping, or leaf removal, look no further. Lawn &amp; Garden Professionals is a national brand with local partners. We hand pick lawn and garden partners in your area to ensure only the highest quality of work. Our partners look to us to grow their business, and we look to them to guarantee their landscaping work. Our customers get the best of both worlds!
                </Text>
              </IconHeadingBlock>
            </Box>
          </Flex>
        </Block>
        <Block>
          <Container>
            <Flex mb={2}>
              <Box
                col={screenSize === 'small' ? 12 : (screenSize === 'medium' ? 6 : 4)}
                pr={screenSize === 'small' ? 0 : 1}
              >
                <Base
                  rounded
                  p={2}
                  backgroundColor='primary'
                  style={{ textAlign: 'center' }}
                >
                  <Heading level={4} color='white'>
                    Why you should choose us
                  </Heading>
                </Base>
              </Box>
            </Flex>
            <BrandBadgeList />
          </Container>
        </Block>
        <Block backgroundColor='white'>
          <Container>
            <Heading level={2} my={2} style={{ textAlign: 'center' }}>
              Services we offer
            </Heading>
            <Divider
              width={100}
              color={primary}
              mb={3}
            />
            <ServiceListCarousel />
          </Container>
        </Block>
        <Parallax bgImage={`${STATIC_ASSETS}/lawn-and-garden-professionals-of-ann-arbor-michigan.jpg`}>
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
      </div>
    )
  }
}

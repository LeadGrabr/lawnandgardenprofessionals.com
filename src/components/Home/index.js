import { default as React, Component, PropTypes } from 'react'
import { Carousel, Circle, LeadForm, ServiceList } from 'components'
import { Flex, Box } from 'reflexbox'
import { default as InfoIcon } from 'react-icons/lib/md/info'
import { Base, Block, Button, Container, Divider, Heading, Text } from 'rebass'
import { default as MaleIcon } from 'react-icons/lib/fa/male'
import { default as lawnGardenImg } from './lawn-and-garden-professionals-of-ann-arbor-michigan@small.jpg'
import { Parallax } from 'react-parallax'
import { connect } from 'react-redux'
import { logoWidth } from 'components/Navbar'
import { default as styles } from './style.scss'
import { default as BrandBadgeList } from './BrandBadgeList'

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
    const { colors: { black, darkGray, primary, white }, shadows } = this.context
    const { screenSize } = this.props
    const { STATIC_ASSETS } = process.env
    const isSmallOrMedium = screenSize === 'medium' || screenSize === 'small'
    return (
      <div>
        <Carousel />
        <Flex column>

          <div style={{ backgroundColor: darkGray, overflow: 'hidden' }}>
            <Flex
              is={Container}
              backgroundColor='darkGray'
              px={isSmallOrMedium ? 0 : 2}
              column={isSmallOrMedium}
            >
              <Flex
                align='center'
                className={styles.instantQuote}
                style={{
                  backgroundColor: black,
                  position: 'relative',
                  height: isSmallOrMedium ? 40 : 'auto',
                  width: logoWidth
                }}
                m={0}
                px={isSmallOrMedium ? 2 : 0}
              >
                <Box pr={1}>
                  <InfoIcon style={{ color: primary }} />
                </Box>
                <Box>
                  <Heading level={4} color='white'>
                    <span style={{ whiteSpace: 'nowrap' }}>
                      Get an Instant Quote
                    </span>
                  </Heading>
                </Box>
                <span
                  style={{
                    borderStyle: 'solid',
                    borderColor: `transparent ${darkGray} transparent transparent`,
                    borderTopWidth: 0,
                    borderRightWidth: 40,
                    borderBottomWidth: 100,
                    borderLeftWidth: 0,
                    position: 'absolute',
                    right: 0
                  }}
                />
              </Flex>
              <Base
                style={{ width: isSmallOrMedium ? '100%' : '75%' }}
                m={0}
                backgroundColor='darkGray'
              >
                <LeadForm />
              </Base>
            </Flex>
          </div>

          <Block backgroundColor='white' style={{ boxShadow: shadows[0], zIndex: 2 }}>
            <Flex is={Container} wrap>
              <Box
                col={isSmallOrMedium ? 12 : 6}
                pr={isSmallOrMedium ? 0 : 1}
                mb={isSmallOrMedium ? 3 : 0}
              >
                <Heading size={1} level={2} mb={1}>
                  Lawn and Garden Professionals
                </Heading>
                <Text mb={1}>Gardening, Landscaping and Maintenance Services</Text>
                <div style={{ maxHeight: 246, overflow: 'hidden' }}>
                  <img
                    alt
                    src={lawnGardenImg}
                    style={{
                      maxWidth: '100%',
                      width: '100%'
                    }}
                  />
                </div>
              </Box>
              <Box
                col={isSmallOrMedium ? 12 : 6}
                pl={isSmallOrMedium ? 0 : 1}
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
                  style={{
                    marginTop: -10,
                    marginLeft: 20,
                    paddingLeft: 44,
                    paddingRight: 44
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
        </Flex>
      </div>
    )
  }
}

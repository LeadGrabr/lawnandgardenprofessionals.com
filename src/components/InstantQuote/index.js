import { default as React, Component, PropTypes } from 'react'
import { Block, Container, IconHeadingBlock, PageHeader, LeadForm, SecondaryNav } from 'components'
import { Link } from 'react-router'
import { default as styles } from './style.scss'
import { Base, Heading, Text } from 'prefixed-rebass'
import { default as PaperPlaneIcon } from 'react-icons/lib/fa/paper-plane'
import { default as CalculatorIcon } from 'react-icons/lib/fa/calculator'
import { default as PhoneIcon } from 'react-icons/lib/fa/phone'
import { default as MapMarkerIcon } from 'react-icons/lib/fa/map-marker'
import { Flex, Box } from 'prefixed-reflexbox'
import { connect } from 'react-redux'
import { default as BraggingRights } from './BraggingRights'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class InstantQuote extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  render () {
    const { screenSize } = this.props
    const isMobile = screenSize === 'medium' || screenSize === 'small'
    return (
      <div>
        <PageHeader
          heading='Get an Instant Quote'
          breadcrumbs={[
            { children: 'Home', is: Link, to: '/' },
            { children: 'Instant Quote', is: Link, to: '/instant-quote', activeClassName: styles.activeNavItem }
          ]}
        />
        <Block backgroundColor='white'>
          <Container>
            <Flex wrap>
              <Box col={isMobile ? 12 : 8} pr={isMobile ? 0 : 2} pb={isMobile ? 2 : 0}>
                <Heading level={2} my={2}>
                  Just fill out this quick form
                </Heading>
                <Text my={2}>
                  We would be delighted to serve you with our services, just use the form below or choose the services you are interested in and we will be in touch with you in few hours. We’re available 7 days a week, from 6 AM to 8 PM to take your call.
                </Text>
                <LeadForm column />
              </Box>
              <Box col={isMobile ? 12 : 4} pb={isMobile ? 2 : 0}>
                <Base mb={2}>
                  <Heading level={3} my={2}>
                    How it works
                  </Heading>
                  <div>
                    <IconHeadingBlock
                      heading='Submit Your Requirement'
                      icon={PaperPlaneIcon}
                    />
                    <IconHeadingBlock
                      heading='We Prepare an Estimate'
                      icon={CalculatorIcon}
                    />
                    <IconHeadingBlock
                      heading='You Get a Call From Us'
                      icon={PhoneIcon}
                    />
                    <IconHeadingBlock
                      border={false}
                      heading='Our Team Visits You On Site'
                      icon={MapMarkerIcon}
                    />
                  </div>
                </Base>
                <SecondaryNav />
              </Box>
            </Flex>
          </Container>
        </Block>
        <BraggingRights />
      </div>
    )
  }
}

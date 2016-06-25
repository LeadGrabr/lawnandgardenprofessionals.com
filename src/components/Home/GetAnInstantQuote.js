import { default as React, Component, PropTypes } from 'react'
import { Container, LeadForm } from 'components'
import { Flex, Box } from 'reflexbox'
import { default as InfoIcon } from 'react-icons/lib/md/info'
import { Base, Heading } from '@bentatum/rebass'
import { connect } from 'react-redux'
import { logoWidth } from 'components/Navbar'
import { default as styles } from './style.scss'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class GetAnInstantQuote extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  static contextTypes = {
    colors: PropTypes.object.isRequired
  };

  render () {
    const { colors: { black, darkGray, primary } } = this.context
    const { screenSize } = this.props
    const isMobile = screenSize === 'medium' || screenSize === 'small'
    return (
      <div style={{ backgroundColor: darkGray, overflow: 'hidden' }}>
        <Flex
          is={Container}
          backgroundColor='darkGray'
          column={isMobile}
          px={0}
        >
          <Flex
            align='center'
            className={styles.instantQuote}
            style={{
              backgroundColor: black,
              position: 'relative',
              height: isMobile ? 40 : 'auto',
              width: isMobile ? '100%' : logoWidth
            }}
            m={0}
            px={isMobile ? 1 : 2}
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
            m={0}
            backgroundColor='darkGray'
            px={isMobile ? 1 : 2}
            style={{
              width: isMobile ? '100%' : '75%',
              zIndex: 1
            }}
          >
            <LeadForm />
          </Base>
        </Flex>
      </div>
    )
  }
}

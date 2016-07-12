import { default as React, Component, PropTypes } from 'react'
import { Block, Container } from 'components'
import { Heading } from 'prefixed-rebass'
import { Flex, Box } from 'prefixed-reflexbox'
import { default as CountUp } from 'react-countup'
import { connect } from 'react-redux'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class BraggingRights extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  render () {
    const { screenSize } = this.props
    const isMobile = screenSize === 'medium' || screenSize === 'small'
    const countUpProps = {
      duration: 2.5,
      useEasing: false,
      useGrouping: true
    }
    return (
      <Block backgroundColor='lightGray'>
        <Container>
          <Flex wrap>
            <Box col={isMobile ? 12 : 6} py={isMobile ? 2 : 0}>
              <Heading><CountUp {...countUpProps} start={0} end={6400} /></Heading>
              <Heading>Trees Planted</Heading>
            </Box>
            <Box col={isMobile ? 12 : 6} py={isMobile ? 2 : 0}>
              <Heading><CountUp {...countUpProps} start={0} end={1000} /></Heading>
              <Heading>Projects Completed</Heading>
            </Box>
          </Flex>
        </Container>
      </Block>
    )
  }
}

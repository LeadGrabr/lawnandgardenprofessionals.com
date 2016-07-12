import { default as React, Component, PropTypes } from 'react'
import { Block, Container } from 'components'
import { Heading } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as CountUp } from 'react-countup'
import { connect } from 'react-redux'
import { default as TreeIcon } from 'react-icons/lib/fa/tree'
import { default as TeamIcon } from 'react-icons/lib/fa/group'
import { default as LocationSignIcon } from 'react-icons/lib/fa/map-signs'
import { default as PeaceSignIcon } from 'react-icons/lib/fa/hand-peace-o'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class BraggingRights extends Component {

  static contextTypes = {
    colors: PropTypes.object.isRequired
  };

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  boxCols () {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return 3
      case 'medium':
        return 6
      default:
        return 12
    }
  }

  render () {
    const { colors: { white } } = this.context
    const { screenSize } = this.props
    const isMobile = screenSize === 'medium' || screenSize === 'small'
    const countUpProps = {
      duration: 2.5,
      useEasing: false,
      useGrouping: true
    }
    const boxProps = {
      col: this.boxCols(),
      mb: 2,
      py: isMobile ? 2 : 0
    }
    const headingProps = {
      color: 'white'
    }
    const iconProps = {
      style: { color: white }
    }
    return (
      <Block backgroundColor='primary'>
        <Container>
          <Flex wrap>
            <Box {...boxProps}>
              <TreeIcon {...iconProps} />
              <Heading {...headingProps}>
                <CountUp {...countUpProps} start={0} end={6400} />
              </Heading>
              <Heading {...headingProps}>
                Trees Planted
              </Heading>
            </Box>
            <Box {...boxProps}>
              <TeamIcon {...iconProps} />
              <Heading {...headingProps}>
                <CountUp {...countUpProps} start={0} end={36} />
              </Heading>
              <Heading {...headingProps}>
                Team Members
              </Heading>
            </Box>
            <Box {...boxProps}>
              <LocationSignIcon {...iconProps} />
              <Heading {...headingProps}>
                <CountUp {...countUpProps} start={0} end={24} />
              </Heading>
              <Heading {...headingProps}>
                Office Locations
              </Heading>
            </Box>
            <Box {...boxProps}>
              <PeaceSignIcon {...iconProps} />
              <Heading {...headingProps}>
                <CountUp {...countUpProps} start={0} end={1000} />
              </Heading>
              <Heading {...headingProps}>
                Projects Completed
              </Heading>
            </Box>
          </Flex>
        </Container>
      </Block>
    )
  }
}

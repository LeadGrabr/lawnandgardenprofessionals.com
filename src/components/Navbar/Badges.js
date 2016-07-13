import { default as React, PropTypes } from 'react'
import { default as MapMarkerIcon } from 'react-icons/lib/fa/map-marker'
import { default as PhoneIcon } from 'react-icons/lib/fa/phone'
import { default as ClockIcon } from 'react-icons/lib/fa/clock-o'
import { Flex, Box } from 'prefixed-reflexbox'
import { Circle } from 'components'
import { Text } from 'prefixed-rebass'

const NavbarBadges = (props, { colors: { primary } }) => {
  const badgeProps = {
    align: 'center',
    mr: 1,
    my: 1
  }
  const iconProps = {
    style: {
      color: primary
    }
  }
  const circleProps = {
    borderColor: primary
  }
  return (
    <Flex align='center' justify='space-around' style={{ width: '100%' }} {...props}>
      <Flex {...badgeProps}>
        <Box pr={1}>
          <Circle {...circleProps}>
            <MapMarkerIcon {...iconProps} />
          </Circle>
        </Box>
        <Box>
          <Text color='gray' small>
            847 Sumpter Road #411<br />
            Belleville, MI 48111
          </Text>
        </Box>
      </Flex>
      <Flex {...badgeProps}>
        <Box pr={1}>
          <Circle {...circleProps}>
            <PhoneIcon {...iconProps} />
          </Circle>
        </Box>
        <Box>
          <Text bold color='gray' small>
            Call us NOW
          </Text>
          <Text color='primary' small>
            734-786-4475
          </Text>
        </Box>
      </Flex>
      <Flex {...badgeProps}>
        <Box pr={1}>
          <Circle {...circleProps}>
            <ClockIcon {...iconProps} />
          </Circle>
        </Box>
        <Box>
          <Text bold color='gray' small>
            Working Hours
          </Text>
          <Text color='gray' small>
            Mon - Sun 6:00 AM to 8:00 PM
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

NavbarBadges.contextTypes = {
  colors: PropTypes.object.isRequired
}

export default NavbarBadges

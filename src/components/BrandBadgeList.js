import { default as React, Component, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { BrandBadge } from 'components'
import { default as TrophyIcon } from 'react-icons/lib/fa/trophy'
import { default as ArrowUpIcon } from 'react-icons/lib/fa/arrow-up'
import { default as DollarIcon } from 'react-icons/lib/fa/dollar'
import { default as MapPinIcon } from 'react-icons/lib/md/location-on'
import { connect } from 'react-redux'

@connect(({ app: { isXLargeScreen, isLargeScreen, isMediumScreen, isSmallScreen } }) => ({
  isXLargeScreen,
  isLargeScreen,
  isMediumScreen,
  isSmallScreen
}))

export default class BrandBadgeList extends Component {

  static propTypes = {
    isXLargeScreen: PropTypes.bool,
    isLargeScreen: PropTypes.bool,
    isMediumScreen: PropTypes.bool,
    isSmallScreen: PropTypes.bool
  };

  boxCols () {
    if (this.props.isXLargeScreen) {
      return 3
    }
    if (this.props.isLargeScreen) {
      return 6
    }
    return 12
  }

  isColumn () {
    if (this.props.isSmallScreen || this.props.isMediumScreen) {
      return true
    }
    return false
  }

  render () {
    const boxProps = {
      col: this.boxCols()
    }
    const { isXLargeScreen } = this.props
    const column = this.isColumn()
    const padding = column ? 0 : 1
    return (
      <Flex wrap column={column}>
        <Box {...boxProps} pr={padding}>
          <BrandBadge
            icon={TrophyIcon}
            heading='Trustworthy'
            body='We handpick our lawn, garden, and landscaping partners in each service area to make sure you get the best mowing, cleanup, or leaf removal that money can buy.'
          />
        </Box>
        <Box {...boxProps} pl={padding} pr={isXLargeScreen ? padding : 0}>
          <BrandBadge
            icon={ArrowUpIcon}
            heading='Experienced'
            body={'We have been mowing lawns and servicing gardens for decades. Your lawn and garden are the first thing people see, and we make sure it\'s a good first impression.'}
          />
        </Box>
        <Box {...boxProps} pr={padding} pl={isXLargeScreen ? padding : 0}>
          <BrandBadge
            icon={MapPinIcon}
            heading='Locally Owned'
            body='Local first service is getting harder to find in the landscaping industry. We make sure you can talk to a local specialist face to face, all week long.'
          />
        </Box>
        <Box {...boxProps} pl={padding}>
          <BrandBadge
            icon={DollarIcon}
            heading='Simple Pricing'
            body={'Prices for lanscaping shouldn\'t be complicated. Contact us now for an easy quote on your next lawn care project. We respond the same day.'}
          />
        </Box>
      </Flex>
    )
  }
}

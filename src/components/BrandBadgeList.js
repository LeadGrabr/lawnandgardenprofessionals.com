import { default as React, Component, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { BrandBadge } from 'components'
import { default as TrophyIcon } from 'react-icons/lib/fa/trophy'
import { default as ArrowUpIcon } from 'react-icons/lib/fa/arrow-up'
import { default as DollarIcon } from 'react-icons/lib/fa/dollar'
import { default as MapPinIcon } from 'react-icons/lib/md/location-on'
import { connect } from 'react-redux'

@connect(({ app: { isLargeScreen, isMediumScreen } }) => ({
  isLargeScreen,
  isMediumScreen
}))

export default class BrandBadgeList extends Component {

  static propTypes = {
    isLargeScreen: PropTypes.bool,
    isMediumScreen: PropTypes.bool
  };

  boxCols () {
    if (this.props.isLargeScreen) {
      return 3
    }
    if (this.props.isMediumScreen) {
      return 6
    }
    return 12
  }

  isColumn () {
    if (this.props.isLargeScreen || this.props.isMediumScreen) {
      return false
    }
    return true
  }

  render () {
    const boxProps = {
      col: this.boxCols()
    }
    const { isLargeScreen } = this.props
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
        <Box {...boxProps} pl={padding} pr={isLargeScreen ? padding : 0}>
          <BrandBadge
            icon={ArrowUpIcon}
            heading='Experienced'
            body={'We have been mowing lawns and servicing gardens for decades. Your lawn and garden are the first thing people see, and we make sure it\'s a good first impression.'}
          />
        </Box>
        <Box {...boxProps} pr={padding} pl={isLargeScreen ? padding : 0}>
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

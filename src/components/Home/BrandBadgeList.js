import { default as React, Component, PropTypes } from 'react'
import { Flex, Box } from 'prefixed-reflexbox'
import { BrandBadge } from 'components'
import { default as TrophyIcon } from 'react-icons/lib/fa/trophy'
import { default as ArrowUpIcon } from 'react-icons/lib/fa/arrow-up'
import { default as DollarIcon } from 'react-icons/lib/fa/dollar'
import { default as MapPinIcon } from 'react-icons/lib/md/location-on'
import { connect } from 'react-redux'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class BrandBadgeList extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  boxCols () {
    switch (this.props.screenSize) {
      case 'xlarge':
        return 3
      case 'large':
        return 6
      default:
        return 12
    }
  }

  boxHeight () {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return 314
      default:
        return 'auto'
    }
  }

  render () {
    const { screenSize } = this.props
    const isColumn = screenSize === 'small' || screenSize === 'medium'
    const padding = isColumn ? 0 : 1
    const boxProps = {
      col: this.boxCols()
    }
    const badgeProps = {
      style: {
        height: this.boxHeight()
      }
    }
    return (
      <Flex wrap column={isColumn}>
        <Box {...boxProps} pr={padding}>
          <BrandBadge
            icon={TrophyIcon}
            heading='Trustworthy'
            body='We handpick our lawn, garden, and landscaping partners in each service area to make sure you get the best mowing, cleanup, or leaf removal that money can buy.'
            {...badgeProps}
          />
        </Box>
        <Box {...boxProps} pl={padding} pr={screenSize === 'xlarge' ? padding : 0}>
          <BrandBadge
            icon={ArrowUpIcon}
            heading='Experienced'
            body={'We have been mowing lawns and servicing gardens for decades. Your lawn and garden are the first thing people see, and we make sure it\'s a good first impression.'}
            {...badgeProps}
          />
        </Box>
        <Box {...boxProps} pr={padding} pl={screenSize === 'xlarge' ? padding : 0}>
          <BrandBadge
            icon={MapPinIcon}
            heading='Locally Owned'
            body='Local first service is getting harder to find in the landscaping industry. We make sure you can talk to a local specialist face to face, all week long.'
            {...badgeProps}
          />
        </Box>
        <Box {...boxProps} pl={padding}>
          <BrandBadge
            icon={DollarIcon}
            heading='Simple Pricing'
            body={'Prices for lanscaping shouldn\'t be complicated. Contact us now for an easy quote on your next lawn care project. We respond the same day.'}
            {...badgeProps}
          />
        </Box>
      </Flex>
    )
  }
}

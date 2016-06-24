import { default as React, PropTypes, Component } from 'react'
import { Breadcrumbs, Container, Heading } from '@bentatum/rebass'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class PageHeader extends Component {

  static propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.object),
    heading: PropTypes.string.isRequired,
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired
  };

  render () {
    const { breadcrumbs, heading, screenSize } = this.props
    const isSmallOrMedium = screenSize === 'small' || screenSize === 'medium'
    return (
      <Flex
        is={Container}
        align='center'
        justify='space-between'
        style={{ minHeight: 150 }}
        wrap
      >
        <Box col={isSmallOrMedium ? 12 : 8}>
          <Heading level={2} size={1} children={heading} />
        </Box>
        <If condition={breadcrumbs}>
          <Box>
            <Breadcrumbs links={breadcrumbs} />
          </Box>
        </If>
      </Flex>
    )
  }
}

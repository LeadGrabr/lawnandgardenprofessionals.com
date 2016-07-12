import { default as React, createElement, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Block, Circle } from 'components'
import { Heading } from 'rebass'

const IconHeadingBlock = ({ border, children, heading, icon, ...props }, { colors: { primary } }) =>
  <div style={{ marginBottom: -20 }} {...props}>
    <Flex align='center'>
      <Circle mr={2}>
        {createElement(icon, {
          size: 20,
          style: { color: primary }
        })}
      </Circle>
      <Heading
        level={3}
        size={4}
        color='gray'
        style={{ textTransform: 'uppercase' }}
        my={2}
      >
        {heading}
      </Heading>
    </Flex>
    <Block
      borderLeft={border}
      borderColor='lightGray'
      style={{
        marginTop: -10,
        marginLeft: 20,
        paddingLeft: 44,
        paddingRight: 44
      }}
    >
      {children}
    </Block>
  </div>

IconHeadingBlock.contextTypes = {
  colors: PropTypes.object.isRequired
}

IconHeadingBlock.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired
}

IconHeadingBlock.defaultProps = {
  border: true
}

export default IconHeadingBlock

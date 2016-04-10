import React, { PropTypes } from 'react'
import { Base, Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'

const sharedPropTypes = {
    children: PropTypes.node.isRequired
}

const Page = ({ children }) =>
    <Flex
        column
        justify="center"
        pt={1}
    >
        {children}
    </Flex>

Page.propTypes = {
    ...sharedPropTypes
}

const Title = ({ children }) =>
    <Heading
        level={1}
        mb={2}
        mt={3}
        style={{ textAlign: 'center' }}
    >
        {children}
    </Heading>

Title.propTypes = {
    ...sharedPropTypes
}

Page.Title = Title

const Subtitle = ({ children }) =>
    <Text
        mb={3}
        style={{ textAlign: 'center' }}
    >
        {children}
    </Text>

Subtitle.propTypes = {
    ...sharedPropTypes
}

Page.Subtitle = Subtitle

const Content = ({ children }) =>
    <Base
        my={2}
        px={2}
    >
        {children}
    </Base>

Content.propTypes = {
    ...sharedPropTypes
}

Page.Content = Content

export default Page

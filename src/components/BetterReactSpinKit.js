import React from 'react'
import { NavItem, Pre, Section, Space, Toolbar } from 'rebass'
import { Page } from '.'
import {
    ChasingDots,
    Circle,
    CubeGrid,
    DoubleBounce,
    Pulse,
    RotatingPlane,
    ThreeBounce,
    WanderingCubes,
    Wave,
    Wordpress
  } from 'better-react-spinkit'
import { Flex } from 'reflexbox'
import { IndexLink } from 'react-router'

const flexProps = {
    align: 'center',
    column: true,
    justify: 'center'
}

const BetterReactSpinKit = () =>
    <Page>
        <Toolbar>
            <NavItem is="div">
                <IndexLink to="/">
                    Benjamin Tatum
                </IndexLink>
            </NavItem>
            <Space auto/>
            <NavItem
                href="http://github.com/bentatum/better-react-spinkit"
                is="a"
                target="_blank"
            >
                Github
            </NavItem>
        </Toolbar>
        <Page.Title>
            Better React SpinKit
        </Page.Title>
        <Section>
            <Flex {...flexProps}>
                <ChasingDots size={100}/>
                <Pre>
                    {"<ChasingDots/>"}
                </Pre>
            </Flex>
        </Section>
        <Section>
            <Flex {...flexProps}>
                <Circle size={100}/>
                <Pre>
                    {"<Circle/>"}
                </Pre>
            </Flex>
        </Section>
        <Section>
            <Flex {...flexProps}>
                <CubeGrid size={100}/>
                <Pre>
                    {"<CubeGrid/>"}
                </Pre>
            </Flex>
        </Section>
        <Section>
            <Flex {...flexProps}>
                <DoubleBounce size={100}/>
                <Pre>
                    {"<DoubleBounce/>"}
                </Pre>
            </Flex>
        </Section>
        <Section>
            <Flex {...flexProps}>
                <Pulse size={100}/>
                <Pre>
                    {"<Pulse/>"}
                </Pre>
            </Flex>
        </Section>
        <Section>
            <Flex {...flexProps}>
                <RotatingPlane size={100}/>
                <Pre>
                    {"<RotatingPlane/>"}
                </Pre>
            </Flex>
        </Section>
        <Section>
            <Flex {...flexProps}>
                <ThreeBounce size={60}/>
                <Pre>
                    {"<ThreeBounce/>"}
                </Pre>
            </Flex>
        </Section>
        <Section>
            <Flex {...flexProps}>
                <WanderingCubes size={100}/>
                <Pre>
                    {"<WanderingCubes/>"}
                </Pre>
            </Flex>
        </Section>
        <Section>
            <Flex {...flexProps}>
                <Wave size={100}/>
                <Pre>
                    {"<Wave/>"}
                </Pre>
            </Flex>
        </Section>
        <Section>
            <Flex {...flexProps}>
                <Wordpress size={100}/>
                <Pre>
                    {"<Wordpress/>"}
                </Pre>
            </Flex>
        </Section>
    </Page>

export default BetterReactSpinKit

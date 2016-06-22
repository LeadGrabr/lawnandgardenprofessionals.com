import { default as React, Component, PropTypes } from 'react'
import { Base, Block, Button, Container, Drawer, Toolbar, ButtonCircle } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as Close } from 'react-icons/lib/md/close'
import { default as Hamburger } from 'react-icons/lib/md/menu'
import { connect } from 'react-redux'
import { default as logo } from './logo.png'
import { PrimaryNav } from 'components'
import { setDrawer } from 'redux/modules/navbar'
import { IndexLink } from 'react-router'
import { default as styles } from './style.scss'

@connect(
  ({ app: { width }, navbar: { drawer } }) => ({
    drawer,
    width
  }),
  { setDrawer }
)

export default class Navbar extends Component {

  static contextTypes = {
    colors: PropTypes.object.isRequired,
    scale: PropTypes.array.isRequired
  };

  static propTypes = {
    drawer: PropTypes.bool,
    setDrawer: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
  };

  render () {
    const { drawer, setDrawer, width } = this.props
    const { colors: { lightGray, primary, white }, scale } = this.context
    return (
      <Toolbar style={{ overflow: 'hidden' }}>
        <div style={{ width: '100%' }}>
          <div
            style={{
              backgroundColor: primary,
              width: '100%'
            }}
          >
            <Container px={0} style={{ width: '100%' }}>
              <Flex
                justify='space-between'
                className={styles.top}
                style={{
                  backgroundColor: white,
                  height: 64,
                  position: 'relative',
                  width: '100%'
                }}
              >
                <Box is={IndexLink} to='/' flex style={{ position: 'relative' }}>
                  <Block
                    backgroundColor='green'
                    color='white'
                    m={0}
                    style={{
                      backgroundImage: `url(${logo})`,
                      backgroundPosition: `${scale[2]}px center`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 200,
                      textIndent: -9999,
                      width: 257
                    }}
                  >
                    Greenskeeper
                  </Block>
                  <span
                    style={{
                      borderStyle: 'solid',
                      borderColor: `transparent ${white} transparent transparent`,
                      borderTopWidth: 0,
                      borderRightWidth: 40,
                      borderBottomWidth: 64,
                      borderLeftWidth: 0,
                      position: 'absolute',
                      right: 0
                    }}
                  />
                </Box>
                <Box pr={2} flex align='center' justify='flex-end'>
                  <Hamburger />
                </Box>
              </Flex>
            </Container>
          </div>
          <Base
            py={2}
            style={{
              borderTopColor: lightGray,
              borderTopStyle: 'solid',
              borderTopWidth: 1,
              width: '100%'
            }}
          >
            <Flex
              is={Container}
              justify='space-between'
              style={{ width: '100%' }}
            >
              <Button theme='default'>
                Book a service
              </Button>
              <Button
                onClick={() => setDrawer(true)}
                theme='default'
              >
                Menu
              </Button>
            </Flex>
          </Base>
        </div>
        <Drawer
          backgroundColor='black'
          color='white'
          open={drawer}
          position='right'
          pt={1}
          size={width}
        >
          <Flex
            align='center'
            justify='flex-end'
            mb={2}
          >
            <ButtonCircle
              backgroundColor='black'
              onClick={() => setDrawer(false)}
            >
              <Close color='white' />
            </ButtonCircle>
          </Flex>
          <PrimaryNav />
        </Drawer>
      </Toolbar>
    )
  }
}

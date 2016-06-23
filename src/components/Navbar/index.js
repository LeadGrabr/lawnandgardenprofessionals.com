import { default as React, Component, PropTypes } from 'react'
import { Base, Block, Button, Container, Drawer, Toolbar, ButtonCircle } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as Close } from 'react-icons/lib/md/close'
import { default as Hamburger } from 'react-icons/lib/md/menu'
import { connect } from 'react-redux'
import { PrimaryNav } from 'components'
import { setDrawer } from 'redux/modules/navbar'
import { IndexLink } from 'react-router'
import { default as styles } from './style.scss'

export const logoWidth = 257

@connect(
  ({ app: { screenSize, width }, navbar: { drawer } }) => ({
    drawer, screenSize, width
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
    const { STATIC_ASSETS } = process.env
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
                    backgroundColor='primary'
                    color='white'
                    py={0}
                    style={{
                      backgroundImage: `url(${STATIC_ASSETS}/logo.png)`,
                      backgroundPosition: `${scale[2]}px center`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 165,
                      textIndent: -9999,
                      width: logoWidth
                    }}
                  >
                    Lawn and Garden Professionals
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
              <Button theme='default' style={{ textTransform: 'uppercase' }}>
                Instant quote
              </Button>
              <Button
                onClick={() => setDrawer(true)}
                style={{ textTransform: 'uppercase' }}
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
              <Close style={{ color: 'white' }} />
            </ButtonCircle>
          </Flex>
          <PrimaryNav />
        </Drawer>
      </Toolbar>
    )
  }
}

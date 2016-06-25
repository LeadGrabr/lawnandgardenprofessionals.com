import { default as React, Component, PropTypes } from 'react'
import { Base, Button, Drawer, Toolbar, ButtonCircle } from '@bentatum/rebass'
import { Flex, Box } from 'reflexbox'
import { default as Close } from 'react-icons/lib/md/close'
import { default as Hamburger } from 'react-icons/lib/md/menu'
import { connect } from 'react-redux'
import { Block, Container, PrimaryNav } from 'components'
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
    colors: PropTypes.object.isRequired
  };

  static propTypes = {
    drawer: PropTypes.bool,
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
    setDrawer: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
  };

  render () {
    const { drawer, screenSize, setDrawer, width } = this.props
    const { colors: { lightGray, primary, white } } = this.context
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
            <Container style={{ width: '100%' }}>
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
                      backgroundPosition: '0px center',
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
                <Box flex align='center' justify='flex-end'>
                  <Hamburger onClick={() => setDrawer(true)} />
                </Box>
              </Flex>
            </Container>
          </div>
          <If condition={screenSize !== 'small' && screenSize !== 'medium'}>
            <Base
              backgroundColor='white'
              py={1}
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
                <Box col={10}>
                  <PrimaryNav />
                </Box>
                <Box auto>
                  <Button theme='default' style={{ width: '100%', textTransform: 'uppercase' }}>
                    Instant quote
                  </Button>
                </Box>
              </Flex>
            </Base>
          </If>
        </div>
        <Drawer
          backgroundColor='white'
          color='white'
          open={drawer}
          position='right'
          size={width}
          p={0}
        >
          <ButtonCircle
            backgroundColor='white'
            onClick={() => setDrawer(false)}
            style={{
              position: 'absolute',
              right: 0,
              top: 0
            }}
          >
            <Close />
          </ButtonCircle>
          <PrimaryNav column />
        </Drawer>
      </Toolbar>
    )
  }
}

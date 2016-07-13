import { default as React, Component, PropTypes } from 'react'
import { Base, Button, Drawer, Toolbar, ButtonCircle } from 'prefixed-rebass'
import { Flex, Box } from 'prefixed-reflexbox'
import { default as CloseIcon } from 'react-icons/lib/md/close'
import { default as HamburgerIcon } from 'react-icons/lib/md/menu'
import { connect } from 'react-redux'
import { Block, Container, PrimaryNav } from 'components'
import { setDrawer } from 'redux/modules/navbar'
import { IndexLink, Link } from 'react-router'
import { default as styles } from './style.scss'
import { default as Badges } from './Badges'
const { STATIC_ASSETS } = process.env
const height = 64

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
    const isMobile = screenSize === 'medium' || screenSize === 'small'
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
                  height,
                  position: 'relative',
                  width: '100%'
                }}
              >
                <Box col={isMobile ? 8 : 4} is={IndexLink} to='/' flex style={{ position: 'relative' }}>
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
                      width: '100%'
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
                <Box col={isMobile ? 4 : 8}>
                  <Flex style={{ height }} align='center' justify='flex-end'>
                    <Choose>
                      <When condition={isMobile}>
                        <HamburgerIcon onClick={() => setDrawer(true)} />
                      </When>
                      <Otherwise>
                        <Badges />
                      </Otherwise>
                    </Choose>
                  </Flex>
                </Box>
              </Flex>
            </Container>
          </div>
          <If condition={!isMobile}>
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
                  <Button
                    backgroundColor='primary'
                    color='white'
                    is={Link}
                    to='/instant-quote'
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap'
                    }}
                  >
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
          size={drawer ? width : 0}
          p={0}
        >
          <ButtonCircle
            backgroundColor='white'
            mt={2}
            onClick={() => setDrawer(false)}
            style={{
              position: 'absolute',
              right: 0,
              top: 0
            }}
          >
            <CloseIcon />
          </ButtonCircle>
          <Badges p={2} wrap justify='flex-start' />
          <PrimaryNav column px={2} />
        </Drawer>
      </Toolbar>
    )
  }
}

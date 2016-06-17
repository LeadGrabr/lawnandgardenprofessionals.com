import { default as React, Component, PropTypes } from 'react'
import { Block, Button, Drawer, Toolbar, ButtonCircle } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as Close } from 'react-icons/lib/md/close'
import { default as Hamburger } from 'react-icons/lib/md/menu'
import { connect } from 'react-redux'
import { default as logo } from './logo.png'
import { PrimaryNav } from 'components'
import { setDrawer } from 'redux/modules/navbar'

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
    const { colors: { gray, white }, scale } = this.context
    return (
      <Toolbar>
        <div style={{ width: '100%' }}>
          <Flex
            justify='space-between'
            style={{
              height: 64,
              width: '100%'
            }}
          >
            <Box flex style={{ position: 'relative' }}>
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
          <Flex
            p={2}
            justify='space-between'
            style={{
              borderTopColor: gray,
              borderTopStyle: 'solid',
              borderTopWidth: 1
            }}
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

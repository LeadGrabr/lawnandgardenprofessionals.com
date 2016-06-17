import './style.scss'
import { Component, PropTypes } from 'react'
import { default as color } from 'color'

const baseColors = {
  green: '#a5c243',
  black: '#3a3a3a',
  white: '#fff',
  lightGray: '#f7f7f7',
  gray: '#eee',
  darkGray: '#494949',
  red: '#f52'
}

export const colors = {
  ...baseColors,
  primary: baseColors.green,
  // secondary: baseColors.lightBlue,
  default: baseColors.darkGray,
  // info: baseColors.blue,
  // success: baseColors.green,
  // warning: baseColors.orange,
  error: baseColors.red
}

const scale = [0, 10, 20, 42, 64]
const fontSizes = [64, 32, 25, 19, 16, 14, 12]

const shadows = [
  `0 0 18px 4px ${color(colors.black).alpha(0.1).rgbString()}`,
  `0px 0px 14px 3px ${color(colors.lightBlue).alpha(0.9).rgbString()}`
]

const breakpoints = {
  small: 425,
  medium: 768,
  large: 1024
}

export default class Theme extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  static childContextTypes = {
    betterReactSpinkit: PropTypes.object,
    breakpoints: PropTypes.object,
    colors: PropTypes.object,
    reactIconBase: PropTypes.object,
    rebass: PropTypes.object,
    reflexbox: PropTypes.object,
    scale: PropTypes.array,
    shadows: PropTypes.array
  };

  getChildContext () {
    return {
      betterReactSpinkit: {
        color: colors.primary,
        size: 50
      },
      breakpoints,
      colors,
      reactIconBase: {
        size: 24,
        color: colors.black
      },
      reflexbox: {
        breakpoints: {
          ...breakpoints,
          mobile: `(min-width: ${breakpoints.small})`,
          tablet: `(min-width: ${breakpoints.medium})`,
          desktop: `(min-width: ${breakpoints.large})`
        },
        scale
      },
      rebass: {
        bold: 700,
        colors,
        fontSizes,
        scale,
        shadows,
        Block: {
          borderWidth: 1
        },
        Breadcrumbs: {
          marginBottom: 0
        },
        Heading: {
          color: colors.darkGray
        },
        Input: {
          color: colors.darkGray,
          width: '100%'
        },
        Menu: {
          borderWidth: 0
        },
        NavItem: {
          fontWeight: 400
        },
        Select: {
          color: colors.darkGray
        },
        Toolbar: {
          backgroundColor: 'transparent',
          paddingLeft: 0,
          paddingRight: 0
        }
      },
      scale,
      shadows
    }
  }

  render () {
    return this.props.children
  }
}

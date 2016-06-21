import ApiClient from '../../apiClient'
import { AWAIT_MARKER } from 'redux-await'
import { breakpoints } from 'components/Theme'
const SCREEN_DIMENSIONS = `${process.env.REDUX_PREFIX}/SCREEN_DIMENSIONS_CHANGE`
const SUBMIT_LEAD = `${process.env.REDUX_PREFIX}/SUBMIT_LEAD`
const client = new ApiClient()

const intitialState = {
  height: 0,
  width: 0,
  isLargeScreen: false,
  isMediumScreen: false,
  isSmallScreen: true
}

export function setScreenSize ({ height, width }) {
  return {
    type: SCREEN_DIMENSIONS,
    payload: {
      height,
      width
    }
  }
}

export function createLead (data = {}) {
  return {
    type: SUBMIT_LEAD,
    AWAIT_MARKER,
    payload: {
      [SUBMIT_LEAD]: client.post('Lead', {
        data: {
          ...data,
          audience: process.env.AUDIENCE
        }
      })
    }
  }
}

export function reducer (state = intitialState, action) {
  switch (action.type) {
    case SCREEN_DIMENSIONS: {
      const { width, height } = action.payload
      const { small, medium } = breakpoints
      const isSmallScreen = width <= small
      const isMediumScreen = !isSmallScreen && width <= medium
      const isLargeScreen = !isSmallScreen && !isMediumScreen
      return {
        ...state,
        height,
        width,
        isSmallScreen,
        isMediumScreen,
        isLargeScreen
      }
    }
    default:
      return state
  }
}

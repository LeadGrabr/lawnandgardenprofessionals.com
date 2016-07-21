const DRAWER = `${process.env.REDUX_PREFIX}/DRAWER`
import { LOCATION_CHANGE } from 'react-router-redux'

const intitialState = {
  drawer: false
}

export function setDrawer (drawer = true) {
  return {
    type: DRAWER,
    payload: { drawer }
  }
}

export function reducer (state = intitialState, action) {
  switch (action.type) {
    case DRAWER:
      return { ...state, ...action.payload }
    case LOCATION_CHANGE:
      return {
        ...state,
        drawer: false
      }
    default:
      return state
  }
}

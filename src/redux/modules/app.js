import ApiClient from '../../apiClient'
import { AWAIT_MARKER } from 'redux-await'
const SCREEN_DIMENSIONS = 'lgp/SCREEN_DIMENSIONS_CHANGE'
const SUBMIT_LEAD = 'lgp/SUBMIT_LEAD'
const client = new ApiClient()

const intitialState = {
  height: 0,
  width: 0
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
    case SCREEN_DIMENSIONS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

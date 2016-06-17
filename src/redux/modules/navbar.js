const DRAWER = `${process.env.REDUX_PREFIX}/DRAWER`

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
    default:
      return state
  }
}

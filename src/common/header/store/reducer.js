import * as constants from './constants'

const defaultState = {
  isFocus: false
}
const reducer = (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      isFocus: true
    }
  }
  if (action.type === constants.SEARCH_BLUR) {
    return {
      isFocus: false
    }
  }
  return state
}

export default reducer

import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocus: false
})
const reducer = (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('isFocus', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('isFocus', false)
  }
  return state
}

export default reducer

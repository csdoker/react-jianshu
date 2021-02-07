import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocus: false,
  list: []
})

const reducer = (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('isFocus', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('isFocus', false)
  }
  if (action.type === constants.CHANGE_LIST) {
    return state.set('list', action.data)
  }
  return state
}

export default reducer

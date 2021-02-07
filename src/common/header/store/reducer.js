import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocus: false,
  list: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('isFocus', true)
    case constants.SEARCH_BLUR:
      return state.set('isFocus', false)
    case constants.CHANGE_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}

export default reducer

import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocus: false,
  isMouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('isFocus', true)
    case constants.SEARCH_BLUR:
      return state.set('isFocus', false)
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    case constants.SEARCH_MOUSE_ENTER:
      return state.set('isMouseIn', true)
    case constants.SEARCH_MOUSE_LEAVE:
      return state.set('isMouseIn', false)
    default:
      return state
  }
}

export default reducer

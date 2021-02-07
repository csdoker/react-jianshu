const defaultState = {
  isFocus: false
}
const reducer = (state = defaultState, action) => {
  if (action.type === 'searchFocus') {
    return {
      isFocus: true
    }
  }
  if (action.type === 'searchBlur') {
    return {
      isFocus: false
    }
  }
  return state
}

export default reducer

import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'changeHomeData':
      return state.merge({
        topList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state
  }
}

export default reducer

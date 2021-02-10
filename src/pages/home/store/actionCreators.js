import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const { data } = res.data
      dispatch(changeHomeData(data))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const getMoreList = (articlePage) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${articlePage}`).then((res) => {
      const { data } = res.data
      dispatch(addHomeList(data, articlePage + 1))
    }).catch(() => {
      console.log('error')
    })
  }
}

import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then((res) => {
      const { data } = res.data
      const { title, content } = data
      dispatch(changeDetail(title, content))
    }).catch(() => {
      console.log('error')
    })
  }
}

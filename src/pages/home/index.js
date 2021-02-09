import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import axios from 'axios'

class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount () {
    axios.get('/api/home.json').then((res) => {
      const { data } = res.data
      const { topicList, articleList, recommendList } = data
      const action = {
        type: 'changeHomeData',
        topicList,
        articleList,
        recommendList
      }
      this.props.changeHomeData(action)
    }).catch(() => {
      console.log('error')
    })
  }
}

const mapDispatch = dispatch => ({
  changeHomeData (action) {
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)

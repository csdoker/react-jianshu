import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'

class Home extends Component {
  handleScrollTop () {
    window.scrollTo(0, 0)
  }

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
        {
          this.props.scrollVisible ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopVisible)
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopVisible)
  }
}

const mapState = state => ({
  scrollVisible: state.getIn(['home', 'scrollVisible'])
})

const mapDispatch = dispatch => ({
  changeHomeData () {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopVisible (e) {
    dispatch(actionCreators.toggleTopShow(document.documentElement.scrollTop > 100))
  }
})

export default connect(mapState, mapDispatch)(Home)

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'

class List extends Component {
  render () {
    const { articleList, getMoreList, articlePage } = this.props
    return (
      <Fragment>
        {
          articleList.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className='list-pic' src={item.get('imgUrl')} alt='' />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(articlePage)}>更多文字</LoadMore>
      </Fragment>
    )
  }
}

const mapState = state => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatch = dispatch => ({
  getMoreList (articlePage) {
    dispatch(actionCreators.getMoreList(articlePage))
  }
})

export default connect(mapState, mapDispatch)(List)

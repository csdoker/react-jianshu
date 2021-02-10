import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render () {
    const { articleList, getMoreList, articlePage } = this.props
    return (
      <Fragment>
        {
          articleList.map((item, index) => {
            return (
              <Link key={index} to={`/detail/${item.get('id')}`}>
                <ListItem>
                  <img className='list-pic' src={item.get('imgUrl')} alt='' />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
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

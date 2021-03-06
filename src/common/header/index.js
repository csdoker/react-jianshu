import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'

class Header extends Component {
  getListArea () {
    const {
      isFocus,
      list,
      page,
      totalPage,
      isMouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let index = (page - 1) * 10; index < page * 10; index++) {
        pageList.push(
          <SearchInfoItem key={newList[index]}>{newList[index]}</SearchInfoItem>
        )
      }
    }
    if (isFocus || isMouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon
                }}
                className='iconfont iconsync'
              />
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const {
      isFocus,
      handleSearchFocus,
      handleSearchBlur,
      list,
      login,
      logout
    } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {login ? (
            <NavItem className='right' onClick={logout}>退出</NavItem>
          ) : (
            <Link to='/login'>
              <NavItem className='right'>登录</NavItem>
            </Link>
          )}
          <NavItem className='right'>
            <i className='iconfont iconsetting' />
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={isFocus} classNames='slide'>
              <NavSearch
                className={isFocus ? 'focused' : ''}
                onFocus={() => handleSearchFocus(list)}
                onBlur={handleSearchBlur}
              />
            </CSSTransition>
            <i
              className={
                isFocus ? 'iconfont iconsearch focused' : 'iconfont iconsearch'
              }
            />
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writing'>
              <i className='iconfont iconedit' />
              写文章
            </Button>
          </Link>
          <Button className='register'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFocus: state.getIn(['header', 'isFocus']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    isMouseIn: state.getIn(['header', 'isMouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearchFocus (list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleSearchBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.searchMouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.searchMouseLeave())
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout () {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

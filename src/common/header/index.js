import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
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

const getListArea = visible => {
  if (visible) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo href='/' />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont iconsetting' />
        </NavItem>
        <SearchWrapper>
          <CSSTransition timeout={200} in={props.isFocus} classNames='slide'>
            <NavSearch
              className={props.isFocus ? 'focused' : ''}
              onFocus={props.handleSearchFocus}
              onBlur={props.handleSearchBlur}
            />
          </CSSTransition>
          <i
            className={
              props.isFocus
                ? 'iconfont iconsearch focused'
                : 'iconfont iconsearch'
            }
          />
          { getListArea(props.isFocus) }
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writing'>
          <i className='iconfont iconedit' />
          写文章
        </Button>
        <Button className='register'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isFocus: state.getIn(['header', 'isFocus'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearchFocus () {
      dispatch(actionCreators.searchFocus())
    },
    handleSearchBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

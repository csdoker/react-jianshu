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
  SearchWrapper
} from './style'

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
          <CSSTransition
            timeout={200}
            in={props.isFocus}
            classNames='slide'
          >
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
    isFocus: state.header.isFocus
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

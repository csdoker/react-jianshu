import React, { Component } from 'react'
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

class Header extends Component {
  getListArea () {
    if (this.props.isFocus) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map(item => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
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
            <CSSTransition timeout={200} in={this.props.isFocus} classNames='slide'>
              <NavSearch
                className={this.props.isFocus ? 'focused' : ''}
                onFocus={this.props.handleSearchFocus}
                onBlur={this.props.handleSearchBlur}
              />
            </CSSTransition>
            <i
              className={
                this.props.isFocus
                  ? 'iconfont iconsearch focused'
                  : 'iconfont iconsearch'
              }
            />
            { this.getListArea() }
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
}

const mapStateToProps = state => {
  return {
    isFocus: state.getIn(['header', 'isFocus']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearchFocus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleSearchBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

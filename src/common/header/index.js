import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFocus: false
    }
    this.handleSearchFocus = this.handleSearchFocus.bind(this)
    this.handleSearchBlur = this.handleSearchBlur.bind(this)
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
            <CSSTransition timeout={200} in={this.state.isFocus} classNames='slide'>
              <NavSearch className={this.state.isFocus ? 'focused' : ''} onFocus={this.handleSearchFocus} onBlur={this.handleSearchBlur} />
            </CSSTransition>
            <i className={this.state.isFocus ? 'iconfont iconsearch focused' : 'iconfont iconsearch'} />
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

  handleSearchFocus () {
    this.setState({
      isFocus: true
    })
  }

  handleSearchBlur () {
    this.setState({
      isFocus: false
    })
  }
}

export default Header

import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

class Header extends Component {
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
            <NavSearch />
            <i className='iconfont iconsearch' />
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

export default Header

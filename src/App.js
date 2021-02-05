import React, { Component, Fragment } from 'react'
import Header from './common/header'
import { GlobalStyle } from './style'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App

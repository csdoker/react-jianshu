import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import { GlobalStyle } from './style'
import store from './store'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Provider store={store}>
          <Header />
        </Provider>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App

import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import { GlobalStyle } from './style'
import store from './store'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Provider store={store}>
          <Router>
            <div>
              <Header />
              <Route path='/' exact render={() => <Home />} />
              <Route path='/detail/:id' exact render={() => <Detail />} />
              <Route path='/login' exact render={() => <Login />} />
              <Route path='/write' exact render={() => <Write />} />
            </div>
          </Router>
        </Provider>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App

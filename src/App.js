import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import { GlobalStyle } from './style'
import store from './store'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Provider store={store}>
          <Router>
            <Header />
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/detail/:id' exact>
                <Detail />
              </Route>
            </Switch>
          </Router>
        </Provider>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App

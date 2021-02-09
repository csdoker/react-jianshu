import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './common/header'
import { GlobalStyle } from './style'
import store from './store'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Provider store={store}>
          <div>
            <Header />
            <Router>
              <Switch>
                <Route path='/' exact>
                  <div>home</div>
                </Route>
              </Switch>
            </Router>
          </div>
        </Provider>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App

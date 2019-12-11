import React from 'react'
import Login from 'components/Login'
import { GlobalStyle } from 'components/Common/GlobalStyle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App

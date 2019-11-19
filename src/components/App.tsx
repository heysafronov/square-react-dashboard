import * as React from 'react'
import Main from 'components/Main'
import Menu from 'components/Menu'
import Users from 'components/Users'
import About from 'components/About'
import PrivateRoute from 'components/Common/PrivateRoute'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Menu />
            <Main />
          </Route>
          <Route path='/about'>
            <Menu />
            <About />
          </Route>
          <PrivateRoute path='/users'>
            <Menu />
            <Users />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  )
}

export default App

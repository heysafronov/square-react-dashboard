import * as React from 'react'
import Main from 'components/Main'
import Menu from 'components/Menu'
import Users from 'components/Users'
import About from 'components/About'
import Login from 'components/Login'
import PrivateRoute from 'components/Common/PrivateRoute'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'components/Common/GlobalStyle'

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
          <Route path='/users'>
            <Menu />
            <Users />
          </Route>
          <PrivateRoute path='/dont'>
            <Menu />
          </PrivateRoute>
          <Route path='/login'>
            <Menu />
            <Login />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App

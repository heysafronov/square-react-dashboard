import * as React from 'react'
import Main from 'components/Main'
import Menu from 'components/Menu'
import Users from 'components/Users'
import About from 'components/About'
import Login from 'components/Login'
import PrivateRoute from 'components/Common/PrivateRoute'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyleComponent from 'components/Common/GlobalStyle'

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
          <Route path='/login'>
            <Menu />
            <Login />
          </Route>
        </Switch>
      </Router>
      <GlobalStyleComponent />
    </>
  )
}

export default App

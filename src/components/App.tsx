import * as React from 'react'
import Main from 'components/Main'
import Menu from 'components/Menu'
import Users from 'components/Users'
import About from 'components/About'
import Loader from 'components/Common/Loader'
import PrivateRoute from 'components/Common/PrivateRoute'
import { GlobalStyle } from 'components/Common/Styles/GlobalStyle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const Login = React.lazy(() => import('components/Login'))

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Menu />
            <Main />
          </Route>
          <PrivateRoute path='/about'>
            <Menu />
            <About />
          </PrivateRoute>
          <PrivateRoute path='/users'>
            <Menu />
            <Users />
          </PrivateRoute>
          <PrivateRoute path='/dont'>
            <Menu />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </React.Suspense>
  )
}

export default App

import * as React from 'react'
import Main from 'components/Main'
import Menu from 'components/Menu'
import Users from 'components/Users'
import About from 'components/About'
import Loader from 'components/Common/Loader'
import Header from 'components/Common/Header'
import PrivateRoute from 'components/Common/PrivateRoute'
import { GlobalStyle } from 'components/Common/GlobalStyle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const Login = React.lazy(() => import('components/Login'))

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Menu />
          </Route>
          <PrivateRoute path='/about'>
            <Menu />
            <Main />
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

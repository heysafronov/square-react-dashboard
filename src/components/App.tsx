import 'core-js/stable'
import React from 'react'
import 'regenerator-runtime/runtime'
import Loader from 'components/Common/Loader'
import PrivateRoute from 'components/Common/PrivateRoute'
import { GlobalStyle } from 'components/Common/GlobalStyle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const Main = React.lazy(() => import('components/Main'))
const Tasks = React.lazy(() => import('components/Tasks'))
const Login = React.lazy(() => import('components/Login'))
const Activity = React.lazy(() => import('components/Activity'))
const Settings = React.lazy(() => import('components/Settings'))
const Schedule = React.lazy(() => import('components/Schedule'))
const Messages = React.lazy(() => import('components/Messages'))

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <PrivateRoute exact path='/'>
            <Main />
          </PrivateRoute>
          <PrivateRoute path='/messages'>
            <Messages />
          </PrivateRoute>
          <PrivateRoute path='/tasks'>
            <Tasks />
          </PrivateRoute>
          <PrivateRoute path='/schedule'>
            <Schedule />
          </PrivateRoute>
          <PrivateRoute path='/activity'>
            <Activity />
          </PrivateRoute>
          <PrivateRoute path='/settings'>
            <Settings />
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

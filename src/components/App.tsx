import * as React from 'react'
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
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/messages/'>
            <Messages />
          </Route>
          <Route path='/tasks/'>
            <Tasks />
          </Route>
          <Route path='/schedule/'>
            <Schedule />
          </Route>
          <Route path='/activity/'>
            <Activity />
          </Route>
          <Route path='/settings/'>
            <Settings />
          </Route>
          <Route path='/login/'>
            <Login />
          </Route>
          <PrivateRoute path='/dont/'>
            <div>Dont</div>
          </PrivateRoute>
        </Switch>
      </Router>
      <GlobalStyle />
    </React.Suspense>
  )
}

export default App

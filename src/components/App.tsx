import * as React from 'react'
import Users from 'components/Users'
import About from 'components/About'
import Menu from 'components/Menu'
import Sidebar from 'components/Common/Sidebar'
import Loader from 'components/Common/Loader'
import PrivateRoute from 'components/Common/PrivateRoute'
import { GlobalStyle } from 'components/Common/GlobalStyle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const Main = React.lazy(() => import('components/Main'))
const Login = React.lazy(() => import('components/Login'))

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <PrivateRoute path='/about'>
            <Menu />
            <About />
            <Sidebar />
          </PrivateRoute>
          <PrivateRoute path='/users'>
            <Users />
            <Sidebar />
          </PrivateRoute>
          <PrivateRoute path='/dont'>
            <div>Dont</div>
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

import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const auth = false
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute

import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ auth, children, ...rest }) {
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

const mapStateToProps = (state: AppState) => {
  return {
    auth: state.auth.isAuth
  }
}

export default connect(mapStateToProps)(PrivateRoute)

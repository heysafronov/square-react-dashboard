import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

interface IProps {
  auth: boolean
  children: object | []
  rest: object
}

function PrivateRoute({ auth, children, ...rest }: IProps) {
  console.log('children', children)

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

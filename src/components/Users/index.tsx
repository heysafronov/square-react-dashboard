import * as React from 'react'
import { Route } from 'react-router-dom'

const Users = () => {
  return (
    <>
      <Route exact path='/users'>
        <div>Users</div>
      </Route>
      <Route path='/users/:id'>
        <div>Users ID 1</div>
      </Route>
    </>
  )
}

export default Users

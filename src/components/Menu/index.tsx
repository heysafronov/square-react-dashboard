import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`

const Menu = () => {
  return (
    <>
      <Links>
        <Link to='/'>Main</Link>
        <Link to='/about/'>About</Link>
        <Link to='/users/'>Users</Link>
        <Link to='/users/1'>Users #1</Link>
      </Links>
    </>
  )
}

export default Menu

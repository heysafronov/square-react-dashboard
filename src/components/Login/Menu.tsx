import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: white;
  a {
    color: white;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`

const Menu = () => {
  return (
    <MenuWrapper>
      <Link to='#'>Privacy policy</Link> • <Link to='#'>Terms of use</Link>
    </MenuWrapper>
  )
}

export default Menu

import * as React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  height: 230px;
  background-color: aquamarine;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderMain = styled.div`
  height: 210px;
  width: 230px;
  background-color: bisque;
  border-bottom: 2px solid red;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderMain />
    </HeaderWrapper>
  )
}

export default Header

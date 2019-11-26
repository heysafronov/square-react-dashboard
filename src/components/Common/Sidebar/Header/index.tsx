import * as React from 'react'
import styled from 'styled-components'
import HeaderItems from 'components/Common/Sidebar/Header/HeaderItems'

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
      <HeaderMain>
        <HeaderItems />
      </HeaderMain>
    </HeaderWrapper>
  )
}

export default Header

import * as React from 'react'
import styled from 'styled-components'
import HeaderItems from 'components/Common/Sidebar/Header/HeaderItems'

const HeaderWrapper = styled.div`
  height: 230px;
  padding: 20px 20px 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderMain = styled.div`
  height: 190px;
  width: 230px;
  border-bottom: 1px solid #f1f1f5;
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

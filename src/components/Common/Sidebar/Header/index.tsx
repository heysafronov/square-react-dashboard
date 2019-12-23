import React from 'react'
import styled from 'styled-components'
import HeaderItems from 'components/Common/Sidebar/Header/Items'

const Wrapper = styled.div`
  height: 230px;
  padding: 20px 20px 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 620px) {
    display: none;
  }
`
const Main = styled.div`
  height: 190px;
  width: 230px;
  border-bottom: 1px solid #f1f1f5;
`

const Header = () => {
  return (
    <Wrapper>
      <Main>
        <HeaderItems />
      </Main>
    </Wrapper>
  )
}

export default Header

import * as React from 'react'
import styled from 'styled-components'
import Menu from 'components/Common/Sidebar/Menu'
import Header from 'components/Common/Sidebar/Header'

const SidebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 90vh;
`

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Header />
      <Menu />
    </SidebarWrapper>
  )
}

export default Sidebar

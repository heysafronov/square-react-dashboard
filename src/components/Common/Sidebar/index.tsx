import * as React from 'react'
import styled from 'styled-components'
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
      <div>column 2</div>
    </SidebarWrapper>
  )
}

export default Sidebar

import * as React from 'react'
import styled from 'styled-components'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'

const MainWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`

const Tasks = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Sidebar />
        <div>Tasks</div>
      </MainWrapper>
    </>
  )
}

export default Tasks

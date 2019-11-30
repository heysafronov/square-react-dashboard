import * as React from 'react'
import styled from 'styled-components'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'
import Content from 'components/Tasks/Content'

const Wrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`

const Tasks = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Content />
      </Wrapper>
    </>
  )
}

export default Tasks

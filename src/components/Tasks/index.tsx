import React from 'react'
import styled from 'styled-components'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'

const Wrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  background-color: #fafafa;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`

const Tasks = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Content>CONTENT</Content>
      </Wrapper>
    </>
  )
}

export default Tasks

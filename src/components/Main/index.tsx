import * as React from 'react'
import styled from 'styled-components'
import Content from 'components/Main/Content'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'

const MainWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`

const Main = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Sidebar />
        <Content />
      </MainWrapper>
    </>
  )
}

export default Main

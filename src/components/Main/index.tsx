import * as React from 'react'
import styled from 'styled-components'
import Loader from 'components/Common/Loader'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'

const Content = React.lazy(() => import('components/Main/Content'))

const Wrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`

const Main = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <React.Suspense fallback={<Loader />}>
          <Content />
        </React.Suspense>
      </Wrapper>
    </>
  )
}

export default Main

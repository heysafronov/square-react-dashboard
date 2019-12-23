import React from 'react'
import styled from 'styled-components'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import ContentTitle from 'components/Main/Content/Title'
import ContentTeams from 'components/Main/Content/Teams'
import ContentTasks from 'components/Main/Content/Tasks'

const Wrapper = styled.section`
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

const Content = () => {
  return (
    <Wrapper>
      <ContentTitle />
      <ErrorBoundary>
        <ContentTeams />
      </ErrorBoundary>
      <ContentTasks />
    </Wrapper>
  )
}

export default Content

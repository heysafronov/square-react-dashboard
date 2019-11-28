import * as React from 'react'
import styled from 'styled-components'
import ContentTitle from 'components/Main/Content/ContentTitle'
import ContentTeams from 'components/Main/Content/ContentTeams'

const ContentWrapper = styled.section`
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
    <ContentWrapper>
      <ContentTitle />
      <ContentTeams />
      <span>Tasks</span>
    </ContentWrapper>
  )
}

export default Content

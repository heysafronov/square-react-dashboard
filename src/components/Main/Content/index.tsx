import * as React from 'react'
import styled from 'styled-components'
import ContentTitle from 'components/Main/Content/ContentTitle'

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
  padding: 40px;
`

const Content = () => {
  return (
    <ContentWrapper>
      <ContentTitle />
      <span>Teams</span>
      <span>Tasks</span>
    </ContentWrapper>
  )
}

export default Content

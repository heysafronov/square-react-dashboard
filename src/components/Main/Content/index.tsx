import * as React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const Content = () => {
  return (
    <ContentWrapper>
      <span>Text</span>
      <span>Teams</span>
      <span>Tasks</span>
    </ContentWrapper>
  )
}

export default Content

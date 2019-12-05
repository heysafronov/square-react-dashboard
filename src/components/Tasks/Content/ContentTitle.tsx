import React from 'react'
import styled from 'styled-components'
import ContentTitleSelector from 'components/Tasks/Content/ContentTitleSelector'
import ContentTitleSwitcher from 'components/Tasks/Content/ContentTitleSwitcher'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.span`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #171725;
`
const Controls = styled.div`
  display: flex;
  margin-right: 20px;
`

const ContentTitle = () => {
  return (
    <Wrapper>
      <Title>Tasks</Title>
      <Controls>
        <ContentTitleSelector />
        <ContentTitleSwitcher />
      </Controls>
    </Wrapper>
  )
}

export default ContentTitle

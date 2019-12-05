import React from 'react'
import styled from 'styled-components'
import ContentTitleSelector from 'components/Tasks/Content/ContentTitleSelector'
import ContentTitleSwitcher from 'components/Tasks/Content/ContentTitleSwitcher'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.div`
  @media (max-width: 1050px) {
    display: none;
  }
`
const Username = styled.span`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #171725;
  @media (max-width: 450px) {
    display: none;
  }
`
const Text = styled.span`
  font-size: 18px;
  letter-spacing: 0.1px;
  color: #92929d;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
`
const Controls = styled.div`
  display: flex;
  margin-right: 20px;
`

const ContentTitle = () => {
  return (
    <Wrapper>
      <Title>
        <Username>Hi James,</Username>
        <Text>here’s your currently tasks</Text>
      </Title>
      <Controls>
        <ContentTitleSelector />
        <ContentTitleSwitcher />
      </Controls>
    </Wrapper>
  )
}

export default ContentTitle

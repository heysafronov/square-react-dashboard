import React from 'react'
import styled from 'styled-components'
import ContentTitleSelector from 'components/Tasks/Content/Title/Selector'
import ContentTitleSwitcher from 'components/Tasks/Content/Title/Switcher'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 450px) {
    justify-content: center;
  }
`
const Header = styled.div`
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

const Title = () => {
  return (
    <Wrapper>
      <Header>
        <Username>Hi James,</Username>
        <Text>here’s your currently tasks</Text>
      </Header>
      <Controls>
        <ContentTitleSelector />
        <ContentTitleSwitcher />
      </Controls>
    </Wrapper>
  )
}

export default Title

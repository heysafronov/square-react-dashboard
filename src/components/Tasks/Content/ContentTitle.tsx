import * as React from 'react'
import styled from 'styled-components'

const Title = styled.span`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #171725;
  @media (max-width: 450px) {
    display: none;
  }
`
const WelcomeText = styled.span`
  font-size: 18px;
  letter-spacing: 0.1px;
  color: #92929d;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
`

const ContentTitle = () => {
  return (
    <div>
      <Title>Tasks</Title>
      <WelcomeText>here’s your currently projects</WelcomeText>
    </div>
  )
}

export default ContentTitle

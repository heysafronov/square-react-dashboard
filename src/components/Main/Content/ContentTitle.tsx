import * as React from 'react'
import styled from 'styled-components'

const Username = styled.span`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #171725;
`
const WelcomeText = styled.span`
  font-size: 18px;
  letter-spacing: 0.1px;
  color: #92929d;
  margin-left: 10px;
`

const ContentTitle = () => {
  return (
    <div>
      <Username>Hi James,</Username>
      <WelcomeText>here’s your currently projects</WelcomeText>
    </div>
  )
}

export default ContentTitle

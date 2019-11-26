import * as React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 20px 0;
`
const TeamAvatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`
const TeamName = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #171725;
`
const HeaderTeams = () => {
  return(
  <div>
    <FlexWrapper>
      <TeamAvatar
        src={require('assets/images/team1.png')}
        alt='Team avatar'
      />
      <TeamName>Iconspace Team</TeamName>
    </FlexWrapper>
    <div>3</div>
  </div>
  )
}

export default HeaderTeams

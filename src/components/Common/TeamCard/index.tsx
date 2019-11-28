import * as React from 'react'
import styled from 'styled-components'
import IconOval from 'components/Common/Icons/Common/Oval'

const TeamCardWrapper = styled.div`
  width: 400px;
  min-width: 250px;
  height: 104px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin-right: 30px;
`
const Header = styled.div`
  display: grid;
  grid-template-columns: 52px auto auto;
  column-gap: 20px;
`
const Image = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 10px;
  border: 1px solid #e2e2ea;
  display: grid;
  justify-items: center;
  align-items: center;
  img {
    width: 45px;
    height: 45px;
  }
`
const TeamName = styled.span`
  display: grid;
  align-items: center;
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #171725;
`
const More = styled.div`
  display: grid;
  justify-items: end;
  align-items: start;
  cursor: not-allowed;
`

const TeamCard = () => {
  return (
    <TeamCardWrapper>
      <Header>
        <Image>
          <img src={require('assets/images/team1.png')} alt='Team' />
        </Image>
        <TeamName>Sebo Studio</TeamName>
        <More>
          <IconOval />
        </More>
      </Header>
      <div>Avatars</div>
    </TeamCardWrapper>
  )
}

export default TeamCard

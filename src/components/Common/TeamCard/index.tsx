import React from 'react'
import styled from 'styled-components'
import Avatar from 'components/Common/Avatar'
import IconOval from 'components/Common/Icons/Common/Oval'
import { ITeamListUserState } from 'store/teams/types'

const Wrapper = styled.div`
  width: 360px;
  min-width: 235px;
  height: 104px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin-right: 27px;
  @media (max-width: 1600px) {
    margin-bottom: 10px;
  }
  @media (max-width: 800px) {
    margin-right: 0;
  }
  @media (max-width: 450px) {
    padding: 10px;
  }
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
const AvatarWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  img {
    margin-right: 10px;
  }
  div {
    margin-right: 10px;
  }
`

interface ITeamCardProps {
  id: number
  avatar: string
  name: string
  users: ITeamListUserState[]
}

const Avatars = (props: ITeamCardProps): any => {
  return props.users.map((avatar: ITeamListUserState, idx: number): object => (
    <Avatar key={idx} {...avatar} />
  ))
}

const TeamCard: React.FC<ITeamCardProps> = props => {
  const { avatar, name } = props

  return (
    <Wrapper>
      <Header>
        <Image>
          <img src={avatar} alt='Team' />
        </Image>
        <TeamName>{name}</TeamName>
        <More>
          <IconOval />
        </More>
      </Header>
      <AvatarWrapper>
        <Avatars {...props} />
      </AvatarWrapper>
    </Wrapper>
  )
}

export default TeamCard

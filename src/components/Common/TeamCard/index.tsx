import * as React from 'react'
import styled from 'styled-components'
import Avatar from 'components/Common/Avatar'
import IconOval from 'components/Common/Icons/Common/Oval'

const Wrapper = styled.div`
  width: 360px;
  min-width: 235px;
  height: 104px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin-right: 27px;
  @media (max-width: 1160px) {
    margin-right: 0;
    margin-bottom: 10px;
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

interface IUserProps {
  size: number
  name: string
  color: string
  avatar: string
}

interface ITeamCardProps {
  avatar: string
  name: string
  users: IUserProps[]
}

const Avatars = (props: ITeamCardProps): object => {
  return props.users.map((avatar: IUserProps, idx: number): object => (
    <Avatar key={idx} {...avatar} />
  ))
}

const TeamCard: React.FC<ITeamCardProps> = props => {
  return (
    <Wrapper>
      <Header>
        <Image>
          <img src={props.avatar} alt='Team' />
        </Image>
        <TeamName>{props.name}</TeamName>
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

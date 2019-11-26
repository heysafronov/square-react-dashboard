import * as React from 'react'
import styled from 'styled-components'
import Avatar from 'components/Common/Avatar'

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
const Teammates = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`

const teammates = [
  {
    size: 25,
    name: 'TE',
    color: '',
    avatar: require('assets/images/james.png')
  },
  {
    size: 25,
    name: 'TE',
    color: '',
    avatar: require('assets/images/james.png')
  },
  {
    size: 25,
    name: 'TE',
    color: '',
    avatar: require('assets/images/james.png')
  },
  {
    size: 25,
    name: 'TE',
    color: '',
    avatar: require('assets/images/james.png')
  },
  {
    size: 25,
    name: 'TE',
    color: '',
    avatar: require('assets/images/james.png')
  },
  {
    size: 25,
    name: 'TE',
    color: '',
    avatar: require('assets/images/james.png')
  }
]

interface IUserProps {
  size: number
  name: string
  color: string
  avatar: string
}

const users = teammates.map((teammate: IUserProps, idx: number) => (
  <Avatar key={idx} {...teammate} />
))

const HeaderTeams = () => {
  return (
    <div>
      <FlexWrapper>
        <TeamAvatar
          src={require('assets/images/team1.png')}
          alt='Team avatar'
        />
        <TeamName>Iconspace Team</TeamName>
      </FlexWrapper>
      <Teammates>{users}</Teammates>
    </div>
  )
}

export default HeaderTeams

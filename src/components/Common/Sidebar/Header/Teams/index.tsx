import React from 'react'
import styled from 'styled-components'
import Avatar from 'components/Common/Avatar'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 20px 0;
  cursor: not-allowed;
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
const Users = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`

const usersData = [
  {
    size: 26,
    name: 'KA',
    color: '#FFC542',
    avatar: ''
  },
  {
    size: 26,
    name: 'TE',
    color: '',
    avatar: require('assets/images/james.png')
  },
  {
    size: 26,
    name: 'AS',
    color: '#A461D8',
    avatar: ''
  },
  {
    size: 26,
    name: 'GU',
    color: '#FF9AD5',
    avatar: ''
  },
  {
    size: 26,
    name: 'ZT',
    color: '#82C43C',
    avatar: ''
  },
  {
    size: 26,
    name: 'MI',
    color: '#50B5FF',
    avatar: ''
  }
]

interface IUserProps {
  size: number
  name: string
  color: string
  avatar: string
}

const users = usersData.map((user: IUserProps, idx: number): object => (
  <Avatar key={idx} {...user} />
))

const Teams = () => {
  return (
    <>
      <Wrapper>
        <TeamAvatar
          src={require('assets/images/team1.png')}
          alt='Team avatar'
        />
        <TeamName>Iconspace Team</TeamName>
      </Wrapper>
      <Users>{users}</Users>
    </>
  )
}

export default Teams

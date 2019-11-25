import * as React from 'react'
import styled from 'styled-components'

interface IAvatarProps {
  name: string
  color: string
  avatar: string
}

const WithAvatarWrapper = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
`
const WithoutAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: ${props => props.color};
`

const WithAvatar = (props: IAvatarProps) => {
  return <WithAvatarWrapper src={props.avatar} alt='User avatar' />
}

const WithoutAvatar = (props: IAvatarProps) => {
  return <WithoutAvatarWrapper {...props}>{props.name}</WithoutAvatarWrapper>
}

const Avatar: React.FC<IAvatarProps> = props => {
  return (
    <>
      {props.avatar ? <WithAvatar {...props} /> : <WithoutAvatar {...props} />}
    </>
  )
}

export default Avatar

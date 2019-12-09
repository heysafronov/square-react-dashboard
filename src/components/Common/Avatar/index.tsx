import React from 'react'
import styled from 'styled-components'

const WithAvatarWrapper = styled.img`
  width: ${(props: IAvatarProps) => props.size}px;
  height: ${(props: IAvatarProps) => props.size}px;
  cursor: not-allowed;
  border-radius: ${(props: IAvatarProps) => props.size}px;
`
const WithoutAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: white;
  width: ${(props: IAvatarProps) => props.size}px;
  height: ${(props: IAvatarProps) => props.size}px;
  border-radius: ${(props: IAvatarProps) => props.size}px;
  cursor: not-allowed;
  background-color: ${(props: IAvatarProps) => props.color};
`

interface IAvatarProps {
  size: number
  name: string
  color: string
  avatar: string
}

const WithAvatar = (props: IAvatarProps) => {
  return <WithAvatarWrapper {...props} src={props.avatar} alt='User avatar' />
}

const WithoutAvatar = (props: IAvatarProps) => {
  return <WithoutAvatarWrapper {...props}>{props.name}</WithoutAvatarWrapper>
}

const Avatar: React.FC<IAvatarProps> = props => {
  const { avatar } = props

  return (
    <>{avatar ? <WithAvatar {...props} /> : <WithoutAvatar {...props} />}</>
  )
}

export default Avatar

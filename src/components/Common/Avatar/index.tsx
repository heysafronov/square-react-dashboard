import * as React from 'react'
import styled from 'styled-components'

interface IAvatarProps {
  size: number
  name: string
  color: string
  avatar: string
}

const WithAvatarWrapper = styled.img`
  width: ${(props: IAvatarProps) => props.size}px;
  height: ${(props: IAvatarProps) => props.size}px;
  cursor: pointer;
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
  cursor: pointer;
  background-color: ${(props: IAvatarProps) => props.color};
`

const WithAvatar = (props: IAvatarProps) => {
  return <WithAvatarWrapper {...props} src={props.avatar} alt='User avatar' />
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

import * as React from 'react'
import styled from 'styled-components'

interface IAvatarProps {
  name: string
  avatarUrl: string
}

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
`

const WithAvatar = (props: IAvatarProps) => {
  return <Image src={props.avatarUrl} alt='User avatar' />
}

const Avatar: React.FC<IAvatarProps> = props => {
  return <>{props.avatarUrl ? <WithAvatar {...props} /> : null}</>
}

export default Avatar

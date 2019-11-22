import * as React from 'react'
import styled from 'styled-components'

interface Props {
  size: number
  color: string
  text: string
}

const Title = styled.span`
  font-size: ${(props: Props) => props.size}px;
  color: ${(props: Props) => props.color};
  font-weight: 900;
`

const LogoTitle = (props: Props) => {
  return <Title {...props}>{props.text}</Title>
}

export default LogoTitle

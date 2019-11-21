import * as React from 'react'
import styled from 'styled-components'

const Title = styled.span`
  font-family: Poppins;
  font-size: ${(props: Props) => props.size}px;
  color: ${(props: Props) => props.color};
`

interface Props {
  size: number
  color: string
  text: string
}

const LogoTitle = (props: Props) => {
  return <Title {...props}>{props.text}</Title>
}

export default LogoTitle

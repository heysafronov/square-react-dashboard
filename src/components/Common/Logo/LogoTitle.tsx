import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  size: number
  color: string
  text: string
}

const Title = styled.span`
  font-size: ${(props: IProps) => props.size}px;
  color: ${(props: IProps) => props.color};
  font-weight: 900;
`

const LogoTitle = (props: IProps) => {
  return <Title {...props}>{props.text}</Title>
}

export default LogoTitle

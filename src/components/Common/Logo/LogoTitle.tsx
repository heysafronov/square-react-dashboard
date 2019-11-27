import * as React from 'react'
import styled from 'styled-components'

const Title = styled.span`
  font-size: ${(props: IProps) => props.size}px;
  color: ${(props: IProps) => props.color};
  font-weight: 900;
  margin-left: 5px;
`

interface IProps {
  size: number
  color: string
  text: string
}

const LogoTitle = (props: IProps) => {
  return <Title {...props}>{props.text}</Title>
}

export default LogoTitle

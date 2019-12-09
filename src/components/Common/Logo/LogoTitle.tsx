import React from 'react'
import styled from 'styled-components'

const Title = styled.span`
  font-size: ${(props: ILogoTitleProps) => props.size}px;
  color: ${(props: ILogoTitleProps) => props.color};
  font-weight: 900;
  margin-left: 5px;
`

interface ILogoTitleProps {
  size: number
  color: string
  text: string
}

const LogoTitle: React.FC<ILogoTitleProps> = props => {
  const { text } = props

  return <Title {...props}>{text}</Title>
}

export default LogoTitle

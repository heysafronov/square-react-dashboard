import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
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

const Title: React.FC<ILogoTitleProps> = props => {
  const { text } = props

  return <Wrapper {...props}>{text}</Wrapper>
}

export default Title

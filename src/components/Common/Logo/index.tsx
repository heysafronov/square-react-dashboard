import * as React from 'react'
import styled from 'styled-components'
import LogoImage from 'components/Common/Logo/LogoImage'
import LogoTitle from 'components/Common/Logo/LogoTitle'

const LogoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface IProps {
  title: {
    size: number
    color: string
    text: string
  }
  image: {
    size: number
    color: string
  }
}

const Logo = (props: IProps) => {
  return (
    <LogoSection>
      <LogoImage {...props.image} />
      <LogoTitle {...props.title} />
    </LogoSection>
  )
}

export default Logo

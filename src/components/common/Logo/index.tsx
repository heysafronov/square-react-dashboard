import * as React from 'react'
import styled from 'styled-components'
import LogoImage from 'components/common/Logo/LogoImage'
import LogoTitle from 'components/common/Logo/LogoTitle'

const LogoSection = styled.section`
  display: flex;
  align-items: center;
  width: 145px;
  justify-content: space-between;
`

interface Props {
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

const Logo = (props: Props) => {
  return (
    <LogoSection>
      <LogoImage {...props.image} />
      <LogoTitle {...props.title} />
    </LogoSection>
  )
}

export default Logo

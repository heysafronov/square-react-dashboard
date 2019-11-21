import * as React from 'react'
import styled from 'styled-components'
import Logo from 'components/common/Logo'

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0062ff;
`
const logoProps = {
  title: {
    size: 25,
    color: 'white',
    text: 'Square'
  },
  image: {
    size: 50,
    color: 'white'
  }
}

const Login = () => {
  return (
    <LoginSection>
      <Logo {...logoProps} />
      <span>Form</span>
      <span>Terms text</span>
    </LoginSection>
  )
}

export default Login

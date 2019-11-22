import * as React from 'react'
import styled from 'styled-components'
import Form from 'components/Login/Form'
import Logo from 'components/Common/Logo'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  background-color: #0062ff;
}
`

const LoginSection = styled.section`
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const logoProps = {
  title: {
    size: 26,
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
    <>
      <GlobalStyle />
      <LoginSection>
        <Logo {...logoProps} />
        <Form />
        <span>Terms text</span>
      </LoginSection>
    </>
  )
}

export default Login

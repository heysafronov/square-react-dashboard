import * as React from 'react'
import styled from 'styled-components'

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0062ff;
`

const Login = () => {
  return (
    <LoginSection>
      <img

        alt='logo square dashboard'
        width='100px'
      />
      <h2>Form</h2>
      <h2>Terms</h2>
    </LoginSection>
  )
}

export default Login

import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { checkAuth } from 'store/auth/actions'

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  min-width: 320px;
  height: 365px;
  background-color: white;
  border-radius: 20px;
  margin: 35px 10px 25px 10px;
`

interface IFormProps {
  checkAuth: typeof checkAuth
}

const Form: React.FC<IFormProps> = props => {
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.checkAuth({
      login: login,
      password: password
    })
  }

  const handleLogin = (e: any) => {
    setLogin(e.target.value)
  }

  const handlePassword = (e: any) => {
    setPassword(e.target.value)
  }

  return (
    <FormSection>
      <h3>Login to your account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Your login'
          name='name'
          onChange={handleLogin}
          value={login}
        />
        <input
          type='password'
          placeholder='Your password'
          name='password'
          onChange={handlePassword}
          value={password}
        />
        <input type='submit' value='Sign in' />
      </form>
    </FormSection>
  )
}

const mapDispatchToProps = {
  checkAuth
}

export default connect(
  null,
  mapDispatchToProps
)(Form)

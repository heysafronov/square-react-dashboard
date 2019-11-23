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
  const [error, setError] = React.useState({ login: 'no', password: 'no' })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.checkAuth({
      login: login,
      password: password
    })
  }

  const handleLogin = (e: any) => {
    if (e.target.value !== 'admin') {
      setError(prevState => ({
        ...prevState,
        login: 'Login error'
      }))
    } else {
      setError(prevState => ({
        ...prevState,
        login: ''
      }))
    }
    setLogin(e.target.value)
  }

  const handlePassword = (e: any) => {
    if (e.target.value !== 'admin') {
      setError(prevState => ({
        ...prevState,
        password: 'Password error'
      }))
    } else {
      setError(prevState => ({
        ...prevState,
        password: ''
      }))
    }
    setPassword(e.target.value)
  }

  return (
    <FormSection>
      <h3>Login to your account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Your login'
          name='login'
          onChange={handleLogin}
          value={login}
        />
        <span>{error.login}</span>
        <input
          type='password'
          placeholder='Your password'
          name='password'
          onChange={handlePassword}
          value={password}
        />
        <span>{error.password}</span>
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

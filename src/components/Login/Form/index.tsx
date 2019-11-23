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
  const [user, setUser] = React.useState({ login: '', password: '' })
  const [error, setError] = React.useState({ login: '', password: '' })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.checkAuth({
      login: user.login,
      password: user.password
    })
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    if (value !== 'admin') {
      switch (name) {
        case 'login':
          setError(prevState => ({
            ...prevState,
            login: 'Login error'
          }))
          break
        case 'password':
          setError(prevState => ({
            ...prevState,
            password: 'Password error'
          }))
          break
        default:
          break
      }
    } else {
      setError({
        login: '',
        password: ''
      })
    }
    name === 'login'
      ? setUser(prevState => ({
          ...prevState,
          login: value
        }))
      : setUser(prevState => ({
          ...prevState,
          password: value
        }))
  }

  return (
    <FormSection>
      <h3>Login to your account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Your login'
          name='login'
          onChange={handleChange}
          value={user.login}
        />
        <span>{error.login}</span>
        <input
          type='password'
          placeholder='Your password'
          name='password'
          onChange={handleChange}
          value={user.password}
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

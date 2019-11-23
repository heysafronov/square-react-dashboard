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
const InputWrapper = styled.div`
  display: flex;
  position: relative;
`
const InputLabel = styled.label`
  position: absolute;
  top: 0;
  padding: 0 0 3px 20px;
  transition: all 200ms;
  opacity: 0.5;
  color: #92929d;
`
const InputText = styled.input`
  z-index: 1;
  width: 320px;
  height: 38px;
  border: 1px solid #f1f1f5;
  box-sizing: border-box;
  border-radius: 15px;
  background: #fafafb;
  padding: 0 20px;
  margin-bottom: 15px;
  font-size: 12px;
  color: #92929d;
  :focus {
    outline: none;
    ::placeholder {
      opacity: 0;
    }
  }
  :focus + ${InputLabel} {
    font-size: 75%;
    transform: translate3d(0, -100%, 0);
    opacity: 1;
    color: #0062ff;
  }
`
const InputSubmit = styled.input`
  width: 320px;
  height: 38px;
  background: #0062ff;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

interface IFormProps {
  checkAuth: typeof checkAuth
}

const Form: React.FC<IFormProps> = props => {
  const [user, setUser] = React.useState({ login: '', password: '' })
  const [error, setError] = React.useState({
    login: 'Login error',
    password: 'Password error'
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!error.login && !error.password) {
      props.checkAuth({
        login: user.login,
        password: user.password
      })
    }
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
      name === 'login'
        ? setError(prevState => ({
            ...prevState,
            login: ''
          }))
        : setError(prevState => ({
            ...prevState,
            password: ''
          }))
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
        <InputWrapper>
          <InputText
            type='text'
            placeholder='Your login'
            name='login'
            onChange={handleChange}
            value={user.login}
          />
          <InputLabel>
            {error.login ? 'Error, your login: admin' : ''}
          </InputLabel>
        </InputWrapper>
        <InputWrapper>
          <InputText
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleChange}
            value={user.password}
          />
          <InputLabel>
            {error.password ? 'Error, your password: admin' : ''}
          </InputLabel>
        </InputWrapper>
        <InputSubmit
          type='submit'
          value='Sign in'
          disabled={error.login || error.password}
        />
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

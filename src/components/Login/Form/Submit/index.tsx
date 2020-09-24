import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { IUserInfo } from 'store/auth/types'
import { checkAuth } from 'store/auth/actions'

const Wrapper = styled.div`
  display: flex;
  position: relative;
`
const InputLabel = styled.label`
  position: absolute;
  top: 0;
  padding: 0 0 1px 20px;
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
    color: #fc5a5a;
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

interface IFormSubmitProps {
  checkAuth: typeof checkAuth
}

const Sumbit: React.FC<IFormSubmitProps> = props => {
  const { checkAuth } = props

  let dataUser = {
    login: '',
    password: ''
  }

  let dataError = {
    login: 'Login error',
    password: 'Password error'
  }

  const [user, setUser] = React.useState<IUserInfo>(dataUser)
  const [error, setError] = React.useState<IUserInfo>(dataError)
  const [redirect, setRedirect] = React.useState<boolean>(false)

  const renderRedirect = (): object | void => {
    if (redirect) {
      return <Redirect to='/tasks' />
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!error.login && !error.password) {
      checkAuth({
        login: user.login,
        password: user.password
      })
      setRedirect(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <InputText
          type='text'
          placeholder='Your login'
          name='login'
          onChange={handleChange}
          value={user.login}
        />
        <InputLabel>{error.login ? 'Error, your login: admin' : ''}</InputLabel>
      </Wrapper>
      <Wrapper>
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
      </Wrapper>
      <InputSubmit
        type='submit'
        value='Sign in'
        disabled={!!(error.login || error.password)}
      />
      {renderRedirect()}
    </form>
  )
}

const mapDispatchToProps = {
  checkAuth
}

export default connect(
  null,
  mapDispatchToProps
)(Sumbit)

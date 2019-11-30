import { AUTH, IAuthState, IAuthCheckAction } from 'store/auth/types'

const initialState: IAuthState = {
  isAuth: false,
  login: '',
  password: ''
}

export function auth(
  state = initialState,
  action: IAuthCheckAction
): IAuthState {
  switch (action.type) {
    case AUTH:
      return Object.assign(
        {},
        {
          isAuth: true,
          login: action.payload.login,
          password: action.payload.password
        }
      )
    default:
      return state
  }
}

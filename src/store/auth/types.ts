export const AUTH = 'AUTH'

export interface IAuthState {
  isAuth: boolean
  login: string
  password: string
}

export interface IAuthCheckAction {
  type: typeof AUTH
  payload: {
    login: string
    password: string
  }
}

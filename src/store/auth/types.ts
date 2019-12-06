export const AUTH = 'AUTH'

export interface IUserInfo {
  login: string
  password: string
}

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

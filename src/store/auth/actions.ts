import { AUTH, IAuthCheckAction } from 'store/auth/types'

interface IUserInfo {
  login: string
  password: string
}

export const checkAuth = (userInfo: IUserInfo): IAuthCheckAction => {
  return {
    type: AUTH,
    payload: userInfo
  }
}

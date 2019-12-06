import { AUTH, IAuthCheckAction, IUserInfo } from 'store/auth/types'

export const checkAuth = (userInfo: IUserInfo): IAuthCheckAction => {
  return {
    type: AUTH,
    payload: userInfo
  }
}

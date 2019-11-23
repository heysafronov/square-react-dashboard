import { AUTH, IAuthCheckAction } from 'store/auth/types'

export const checkAuth = (userInfo: object): IAuthCheckAction => {
  return {
    type: AUTH,
    payload: userInfo
  }
}

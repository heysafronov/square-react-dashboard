import { SHOW_MORE, IShowMoreAction } from 'store/show/types'

export const ShowMore = (type: string): IShowMoreAction => {
  return {
    type: SHOW_MORE,
    payload: type
  }
}

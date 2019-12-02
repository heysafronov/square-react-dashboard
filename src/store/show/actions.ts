import { SHOW_MORE, IShowMoreAction, IShowTypes } from 'store/show/types'

export const ShowMore = (types: IShowTypes): IShowMoreAction => {
  return {
    type: SHOW_MORE,
    payload: types
  }
}

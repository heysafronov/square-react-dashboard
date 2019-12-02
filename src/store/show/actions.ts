import { SHOW_MORE, IShowMoreAction, ITypes } from 'store/show/types'

export const ShowMore = (types: ITypes): IShowMoreAction => {
  return {
    type: SHOW_MORE,
    payload: types
  }
}

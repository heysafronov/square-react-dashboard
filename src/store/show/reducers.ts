import { SHOW_MORE, IShowState, IShowMoreAction } from 'store/show/types'

const initialState: IShowState = {
  list: {
    backlog: false,
    progress: false
  }
}

export function show(state = initialState, action: IShowMoreAction) {
  switch (action.type) {
    case SHOW_MORE:
      return { list: { ...action.payload } }
    default:
      return state
  }
}

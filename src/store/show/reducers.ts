import { SHOW_MORE, IShowState, IShowMoreAction } from 'store/show/types'

const initialState: IShowState = {
  show: {
    backlog: false,
    progress: false
  }
}

export function show(state = initialState, action: IShowMoreAction) {
  switch (action.type) {
    case SHOW_MORE:
      return { show: { ...action.payload } }
    default:
      return state
  }
}

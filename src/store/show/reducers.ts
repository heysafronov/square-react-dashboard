import { SHOW_MORE, IShowState, IShowMoreAction } from 'store/show/types'

const initialState: IShowState = {
  show: ['All tasks']
}

export function show(state = initialState, action: IShowMoreAction) {
  switch (action.type) {
    case SHOW_MORE:
      return { show: [...state.show, action.payload] }
    default:
      return state
  }
}

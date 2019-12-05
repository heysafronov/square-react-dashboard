import {
  SHOW_MORE,
  IShowState,
  IShowMoreAction,
  SWITCH_KANBAN,
  ISwitchKanbanAction
} from 'store/show/types'

const initialState: IShowState = {
  list: {
    backlog: true,
    progress: true,
    complete: true
  },
  kanban: true
}

export function show(
  state = initialState,
  action: IShowMoreAction | ISwitchKanbanAction
): IShowState {
  switch (action.type) {
    case SHOW_MORE:
      return { ...state, list: { ...action.payload } }
    case SWITCH_KANBAN:
      return { ...state, kanban: action.payload }
    default:
      return state
  }
}

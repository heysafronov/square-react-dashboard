import {
  SHOW_MORE,
  SWITCH_KANBAN,
  IShowMoreAction,
  IShowTypes,
  ISwitchKanbanAction
} from 'store/show/types'

export const showMore = (types: IShowTypes): IShowMoreAction => {
  return {
    type: SHOW_MORE,
    payload: types
  }
}

export const switchKanban = (option: boolean): ISwitchKanbanAction => {
  return {
    type: SWITCH_KANBAN,
    payload: option
  }
}

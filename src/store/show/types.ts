export const SHOW_MORE = 'SHOW_MORE'
export const SWITCH_KANBAN = 'SWITCH_KANBAN'

export interface IShowTypes {
  backlog: boolean
  progress: boolean
  complete: boolean
}

export interface IShowState {
  list: IShowTypes
  kanban: boolean
}

export interface IShowMoreAction {
  type: typeof SHOW_MORE
  payload: IShowTypes
}

export interface ISwitchKanbanAction {
  type: typeof SWITCH_KANBAN
  payload: boolean
}

export const SHOW_MORE = 'SHOW_MORE'

export interface IShowTypes {
  backlog: boolean
  progress: boolean
}

export interface IShowState {
  list: IShowTypes
}

export interface IShowMoreAction {
  type: typeof SHOW_MORE
  payload: object
}

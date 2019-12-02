export const SHOW_MORE = 'SHOW_MORE'

export interface ITypes {
  backlog: boolean
  progress: boolean
}

export interface IShowState {
  list: ITypes
}

export interface IShowMoreAction {
  type: typeof SHOW_MORE
  payload: object
}

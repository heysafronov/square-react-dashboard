export const SHOW_MORE = 'SHOW_MORE'

export interface IShowState {
  show: string[]
}

export interface IShowMoreAction {
  type: typeof SHOW_MORE
  payload: string
}

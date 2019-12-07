export const DRAG_AND_DROP = 'DRAG_AND_DROP'

export interface ITaskState {
  id: string
  title: string
  team: string
  attach: number
  status: string
  score?: string
  line: number
  type: string
}

export interface ITasksDragAndDropAction {
  type: typeof DRAG_AND_DROP
  payload: {
    e: any
    type: string
  }
}

export const DRAG_AND_DROP = 'DRAG_AND_DROP'

export interface ITaskState {
  id: string
  name: string
  type: string
}

export interface ITasksDragAndDropAction {
  type: typeof DRAG_AND_DROP
  payload: {
    e: any
    type: string
  }
}

import { DRAG_AND_DROP, ITasksDragAndDropAction } from 'store/tasks/types'

export const dragAndDrop = (
  e: object,
  type: string
): ITasksDragAndDropAction => {
  return {
    type: DRAG_AND_DROP,
    payload: { e, type }
  }
}

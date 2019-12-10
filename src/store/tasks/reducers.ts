import {
  DRAG_AND_DROP,
  FETCH_TASKS,
  DELETE_TASK,
  ITaskState,
  ITasksDragAndDropAction,
  ITasksFetchTasksAction,
  ITasksDeleteTasksAction
} from 'store/tasks/types'

const checkChrome = (id: string): string => {
  return id[0] === '<' ? id.replace(/[^\d]/g, '').slice(1) : id
}

type Actions =
  | ITasksDragAndDropAction
  | ITasksFetchTasksAction
  | ITasksDeleteTasksAction

const initialState: ITaskState[] = []

export function tasks(state = initialState, action: Actions): ITaskState[] {
  const { type, payload } = action
  switch (type) {
    case DRAG_AND_DROP:
      const id = payload.e.dataTransfer.getData('text/html')
      const checkedId = checkChrome(id)
      return state.filter(task => {
        if (task.id === checkedId) {
          task.type = payload.type
        }
        return task
      })
    case FETCH_TASKS:
      return [...state, ...action.payload]
    case DELETE_TASK:
      return state.filter(task => task.id !== payload)
    default:
      return state
  }
}

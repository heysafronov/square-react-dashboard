import {
  DRAG_AND_DROP,
  FETCH_TASKS,
  ITaskState,
  ITasksDragAndDropAction,
  ITasksFetchTasksAction
} from 'store/tasks/types'

const initialState: ITaskState[] = []

const checkChrome = (id: string): string => {
  return id[0] === '<' ? id.replace(/[^\d]/g, '').slice(1) : id
}

export function tasks(
  tasks = initialState,
  action: ITasksDragAndDropAction | ITasksFetchTasksAction
): ITaskState[] {
  const { type, payload } = action
  switch (type) {
    case DRAG_AND_DROP:
      const id = payload.e.dataTransfer.getData('text/html')
      const checkedId = checkChrome(id)
      return tasks.filter(task => {
        if (task.id === checkedId) {
          task.type = payload.type
        }
        return task
      })
    case FETCH_TASKS:
      return [...tasks, ...action.payload]
    default:
      return tasks
  }
}

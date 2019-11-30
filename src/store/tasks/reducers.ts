import { normalizedTasks } from 'src/api'
import {
  DRAG_AND_DROP,
  ITaskState,
  ITasksDragAndDropAction
} from 'store/tasks/types'

const initialState: ITaskState[] = normalizedTasks

const checkChrome = (id: string): string => {
  return id[0] === '<' ? id.replace(/[^\d]/g, '').slice(1) : id
}

export function tasks(
  tasks = initialState,
  action: ITasksDragAndDropAction
): ITaskState[] {
  const { type, payload } = action
  switch (type) {
    // case 'DELETE_TASK':
    //   return tasks.filter(task => task.id !== payload.id)
    // case 'ADD_TASK':
    //   return tasks.concat({
    //     ...payload.task,
    //     id: randomId
    //   })
    case DRAG_AND_DROP:
      const id = payload.e.dataTransfer.getData('text/html')
      const checkedId = checkChrome(id)
      const filteredTasks = tasks.filter(task => {
        if (task.id === checkedId) {
          task.type = payload.type
        }
        return task
      })
      return (tasks = filteredTasks)
    default:
      return tasks
  }
}

import { ITaskState } from 'store/tasks/types'

export const filtratedTasksBacklog = (state: any): ITaskState[] => {
  return state.tasks.filter((task: ITaskState) => {
    return task.type === 'backlog'
  })
}

export const filtratedTasksTodo = (state: any): ITaskState[] => {
  return state.tasks.filter((task: ITaskState) => {
    return task.type === 'todo'
  })
}

import { ITaskState } from 'store/tasks/types'

export const filtratedTasksBacklog = (state: any): ITaskState[] => {
  return state.tasks.filter((task: ITaskState) => {
    return task.type === 'Backlog'
  })
}

export const filtratedTasksTodo = (state: any): ITaskState[] => {
  return state.tasks.filter((task: ITaskState) => {
    return task.type === 'Todo'
  })
}

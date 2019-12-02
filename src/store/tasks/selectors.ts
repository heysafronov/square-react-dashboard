import { ITaskState } from 'store/tasks/types'

export const filtratedTasks = (state: any, type: string): ITaskState[] => {
  return state.tasks.filter((task: ITaskState) => {
    return task.type === type
  })
}

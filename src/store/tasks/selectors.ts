import { AppState } from 'store'
import { createSelector } from 'reselect'
import { ITaskState } from 'store/tasks/types'

const tasks = (state: AppState): ITaskState[] => state.tasks

export const getTasks = createSelector(
  [tasks],
  list => {
    return list
  }
)

export const filteredTasks = (state: any, type: string): ITaskState[] => {
  return state.tasks.filter((task: ITaskState) => {
    return task.type === type
  })
}

import {ITaskState} from 'store/tasks/types'

export const filtratedTasksBacklog = (state: any)  => {
  return state.tasks.filter((task: ITaskState) => {
    return task.type === 'backlog'
  })
}

export const filtratedTasksTodo = (state: any) => {
  return state.tasks.filter((task: ITaskState) => {
    return task.type === 'todo'
  })
}

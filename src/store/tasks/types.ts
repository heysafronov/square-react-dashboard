import { ITeamListUserState } from 'store/teams/types'

export const DELETE_TASK = 'DELETE_TASK'
export const FETCH_TASKS = 'FETCH_TASKS'
export const DRAG_AND_DROP = 'DRAG_AND_DROP'

export interface ITaskState {
  id: string
  title: string
  team: string
  attach: number
  status: string
  score: { days: number; colors: { bg: string; text: string } }
  line: number
  type: string
  users: ITeamListUserState[]
}

export interface ITasksDragAndDropAction {
  type: typeof DRAG_AND_DROP
  payload: any
}

export interface ITasksFetchTasksAction {
  type: typeof FETCH_TASKS
  payload: ITaskState[]
}

export interface ITasksDeleteTasksAction {
  type: typeof DELETE_TASK
  payload: string
}

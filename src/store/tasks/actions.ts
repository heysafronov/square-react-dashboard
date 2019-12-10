import instance from 'utils/axios'
import { Dispatch } from 'redux'
import {
  FETCH_TASKS,
  DELETE_TASK,
  DRAG_AND_DROP,
  ITasksDragAndDropAction,
  ITasksDeleteTasksAction
} from 'store/tasks/types'

export const fetchTasks = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const { data } = await instance.get('tasks.json')
    dispatch({ type: FETCH_TASKS, payload: data })
  } catch (err) {
    console.error(`[Action: fetchTasks] - ${err}`)
  }
}

export const dragAndDrop = (
  e: object,
  type: string
): ITasksDragAndDropAction => {
  return {
    type: DRAG_AND_DROP,
    payload: { e, type }
  }
}

export const deleteTask = (id: string): ITasksDeleteTasksAction => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

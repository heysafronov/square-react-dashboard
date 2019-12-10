import { AppState } from 'store'
import { createSelector } from 'reselect'
import { IShowTypes } from 'store/show/types'

const showState = (state: AppState): IShowTypes => state.show.list
const kanbanOption = (state: AppState): boolean => state.show.kanban

export const getShowState = createSelector(
  [showState],
  list => {
    return list
  }
)

export const getKanbanOption = createSelector(
  [kanbanOption],
  option => {
    return option
  }
)

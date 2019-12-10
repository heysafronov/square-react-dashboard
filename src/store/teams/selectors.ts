import { AppState } from 'store'
import { createSelector } from 'reselect'
import { ITeamListState } from 'store/teams/types'

const teams = (state: AppState): ITeamListState[] => state.teams.list

export const getTeams = createSelector(
  [teams],
  list => {
    return list
  }
)

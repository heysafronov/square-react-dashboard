import {
  FETCH_TEAMS,
  ITeamsState,
  ITeamsFetchTeamsAction
} from 'store/teams/types'

const initialState: ITeamsState = {
  list: []
}

export function teams(
  state = initialState,
  action: ITeamsFetchTeamsAction
): ITeamsState {
  switch (action.type) {
    case FETCH_TEAMS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}

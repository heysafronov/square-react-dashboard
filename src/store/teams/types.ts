export const FETCH_TEAMS = 'FETCH_TEAMS'

export interface ITeamListUserState {
  size: number
  name: string
  color: string
  avatar: string
}

export interface ITeamListState {
  id: number
  avatar: string
  name: string
  users: ITeamListUserState[]
}

export interface ITeamsState {
  list: ITeamListState[] | object
}

export interface ITeamsFetchTeamsAction {
  type: typeof FETCH_TEAMS
  payload: ITeamsState
}

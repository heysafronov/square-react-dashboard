import { Dispatch } from 'redux'
import instance from 'utils/axios'
import { FETCH_TEAMS } from 'store/teams/types'

export const fetchTeams = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const { data } = await instance.get('teams.json')
    dispatch({ type: FETCH_TEAMS, payload: data })
  } catch (err) {
    console.error(`[Action: fetchTeams] - ${err}`)
  }
}

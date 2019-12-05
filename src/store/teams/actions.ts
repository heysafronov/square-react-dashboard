import axios from 'axios'
import { FETCH_TEAMS } from 'store/teams/types'

export const fetchTeams = () => async dispatch => {
  try {
    const { data } = await axios.get(
      'https://square-dashboard-6ffae.firebaseio.com/teams.json'
    )
    dispatch({ type: FETCH_TEAMS, payload: data })
  } catch (err) {
    console.error(err)
  }
}

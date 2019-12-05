import { FETCH_TEAMS } from 'store/teams/types'

const initialState = {
  list: []
}

export function teams(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEAMS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}

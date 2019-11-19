import { ADD_ONE } from 'constants'

const initialState = {
  addOne: 1
}

export default function addOneReducer(state = initialState, action) {
  if (action.type === 'ADD_ONE') {
    return { addOne: state.addOne + 1 }
  } else return state
}

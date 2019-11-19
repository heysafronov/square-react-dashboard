import { ADD_ONE, CounterState, AddOneMoreTypes } from 'types/counter'

const initialState: CounterState = {
  addOne: null
}

export function addOneReducer(
  state = initialState,
  action: AddOneMoreTypes
): CounterState {
  if (action.type === ADD_ONE) {
    return { addOne: state.addOne + 1 }
  } else return state
}

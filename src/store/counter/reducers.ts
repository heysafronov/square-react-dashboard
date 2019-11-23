import { ADD_ONE, CounterState, AddOneMoreTypes } from 'store/counter/types'

const initialState: CounterState = {
  addOne: 1
}

export function addOneReducer(
  state = initialState,
  action: AddOneMoreTypes
): CounterState {
  switch (action.type) {
    case ADD_ONE:
      return { addOne: state.addOne + 1 }
    default:
      return state
  }
}

export const ADD_ONE = 'ADD_ONE'

export interface CounterState {
  addOne: number
}

interface AddOneMore {
  type: typeof ADD_ONE
  payload: object
}
export type AddOneMoreTypes = AddOneMore

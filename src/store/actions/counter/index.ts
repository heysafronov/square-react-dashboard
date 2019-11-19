import { ADD_ONE, AddOneMoreTypes } from 'types/counter'

export const AddOne = (context: object): AddOneMoreTypes => {
  return {
    type: ADD_ONE,
    payload: context
  }
}

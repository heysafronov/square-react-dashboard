import { ADD_ONE, AddOneMoreTypes } from 'store/counter/types'

export const AddOne = (context: object): AddOneMoreTypes => {
  return {
    type: ADD_ONE,
    payload: context
  }
}

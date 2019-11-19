import { ADD_ONE, ADD_TWO } from 'constants'

export const AddOne = context => {
  return {
    type: ADD_ONE,
    payload: context
  }
}

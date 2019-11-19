import { combineReducers } from 'redux'
import addOneReducer from 'reducers/addOne'

export default combineReducers({
  addOneStore: addOneReducer
})

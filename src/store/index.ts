import thunkMiddleware from 'redux-thunk'
import { auth } from 'store/auth/reducers'
import { show } from 'store/show/reducers'
import { addOneReducer } from 'store/counter/reducers'
import { tasks } from 'store/tasks/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const rootReducer = combineReducers({
  auth,
  tasks,
  show,
  addOneStore: addOneReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middleware = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middleware)
  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer))
}

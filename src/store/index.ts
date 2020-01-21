import thunkMiddleware from 'redux-thunk'
import { auth } from 'store/auth/reducers'
import { show } from 'store/show/reducers'
import { tasks } from 'store/tasks/reducers'
import { teams } from 'store/teams/reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const rootReducer = combineReducers({
  auth,
  show,
  tasks,
  teams
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middleware = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middleware)
  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer))
}

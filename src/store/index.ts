import thunkMiddleware from 'redux-thunk'
import { auth } from 'store/auth/reducers'
import { addOneReducer } from 'store/counter/reducers'
import { tasks } from 'store/tasks/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const rootReducer = combineReducers({
  auth,
  tasks,
  addOneStore: addOneReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  )
  return store
}

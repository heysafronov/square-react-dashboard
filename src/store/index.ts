// import rootReducer from 'reducers'
// import thunk from 'redux-thunk'
// import { createStore, compose, applyMiddleware } from 'redux'
//
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
//
// export default store

import thunkMiddleware from 'redux-thunk'
import { addOneReducer } from 'reducers/counter'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const rootReducer = combineReducers({
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

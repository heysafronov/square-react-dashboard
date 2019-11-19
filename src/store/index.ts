import reducers from 'reducers'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store

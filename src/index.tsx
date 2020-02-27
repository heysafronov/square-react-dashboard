import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import configureStore from 'store'
import { Provider } from 'react-redux'
import { Normalize } from 'styled-normalize'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Normalize />
    <App />
  </Provider>,
  document.getElementById('root')
)

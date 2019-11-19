import * as React from 'react'
import App from 'components/App'
import configureStore from 'store'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

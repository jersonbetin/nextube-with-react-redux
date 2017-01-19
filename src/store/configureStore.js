import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import creaeLogger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers/index'

export function configureStore(initialState){
  const logger = new creaeLogger()
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, logger)
    )
  )
}

export function configureStoreProd(initialState) {
  return createStore(
    reducers,
    initialState
  )
}


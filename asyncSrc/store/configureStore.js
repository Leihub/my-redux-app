import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger' 
import rootReducers from './reducer'

const loggerMiddleware = new createLogger()

function configureStore (preloadedState) {
  return createStore(
    rootReducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
export default configureStore
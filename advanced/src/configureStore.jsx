/* @flow */
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState: any) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  ));
  return store
  // return createStore(
  //   rootReducer,
  //   preloadedState,
  //   applyMiddleware(
  //     thunkMiddleware,
  //     loggerMiddleware
  //   ),
  // )
}

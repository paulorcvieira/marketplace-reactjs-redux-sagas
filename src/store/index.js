import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import reducers from './modules/rootReducers'
import sagas from './modules/rootSagas'

import { loadState, saveState } from './localStorage'

const localStorageState = loadState() || undefined
const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware,
  logger,
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  localStorageState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

sagaMiddleware.run(sagas)

store.subscribe(() => {
  saveState({ list: store.getState().list })
})

// console.log('##### Antes: ', store.getState())
// store.dispatch({ type: '@list/ADD_PRODUCT_REQUEST', list: 'mes', product: { name: 'café' }})
// console.log('##### Depois: ', store.getState())

export default store
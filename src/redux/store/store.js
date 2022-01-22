import { createStore, applyMiddleware } from 'redux'
// Redux DevTools for debugging application's state changes.
import { composeWithDevTools } from '@redux-devtools/extension';
// persist and rehydrate a redux store
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// Thunk middleware for Redux. It allows writing functions with logic inside that can 
// interact with a Redux store's dispatch and getState methods.
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const initialState = {}

const middleware = [thunk]

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export const persistor = persistStore(store)
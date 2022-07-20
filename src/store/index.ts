import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import CategoriesReducer from './categories/categories.reducer'
import UserReducer from './user/user.reducer'
import QuizReducer from './quiz/quiz.reducer'
import { logoutAction } from './user/user.action'
import { rootSaga } from './rootSaga'

const combineReducer = combineReducers({
  Categories: CategoriesReducer,
  User: UserReducer,
  Quiz: QuizReducer,
})

const rootReducer = (state: any, action: any) => {
  if (action.type === logoutAction) {
    state = undefined
  }
  return combineReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = createSagaMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [middleware],
  devTools: true,
})

export let persistor = persistStore(store)

middleware.run(rootSaga)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export * from './categories/categories.action'
export * from './categories/categories.selector'
export * from './user/user.action'
export * from './user/user.selector'
export * from './quiz/quiz.actions'
export * from './quiz/quiz.selector'

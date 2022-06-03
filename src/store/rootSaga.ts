import { all } from 'redux-saga/effects'

import categoriesSaga from './categories/categories.saga'

export function* rootSaga(): Generator {
  yield all([categoriesSaga()])
}

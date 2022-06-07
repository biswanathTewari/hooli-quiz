import { all } from 'redux-saga/effects'

import categoriesSaga from './categories/categories.saga'
import userSaga from './user/user.saga'

export function* rootSaga(): Generator {
  yield all([categoriesSaga(), userSaga()])
}

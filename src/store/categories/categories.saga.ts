import { call, takeLatest, put } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/types'

import {
  getCategoriesAction,
  getCategoriesSuccessAction,
  getCategoriesFailureAction,
} from './categories.action'
import { getCategoriesService, Category } from '../../services'

export function* getCategoriesSaga(): SagaIterator {
  try {
    const response: Array<Category> = yield call(getCategoriesService)
    yield put({ type: getCategoriesSuccessAction, payload: response })
  } catch (err) {
    yield put({ type: getCategoriesFailureAction })
  }
}

export default function* categoriesSaga() {
  yield takeLatest(getCategoriesAction, getCategoriesSaga)
}

import { call, takeLatest, put } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/types'

import {
  getQuizAction,
  getQuizSuccessAction,
  getQuizFailureAction,
} from './quiz.actions'
import { getQuizService, QuizReq, Quiz } from '../../services'

interface QuizSagaProps {
  type: typeof getQuizAction
  payload: QuizReq
}

export function* getQuizSaga(action: QuizSagaProps): SagaIterator {
  try {
    const response: Array<Quiz> = yield call(getQuizService, action.payload)
    yield put({ type: getQuizSuccessAction, payload: response })
  } catch (err) {
    yield put({ type: getQuizFailureAction })
  }
}

export default function* categoriesSaga() {
  yield takeLatest(getQuizAction, getQuizSaga)
}

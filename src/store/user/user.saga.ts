import { call, takeLatest, put, SagaReturnType } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/types'

import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from './user.action'
import { loginService, LoginReqProp, history } from '../../services'

interface loginSagaProps {
  type: typeof loginAction
  payload: LoginReqProp
}

function* loginSaga(action: loginSagaProps): SagaIterator {
  const { email, password, toast, from } = action.payload
  try {
    const response: SagaReturnType<typeof loginService> = yield call(
      loginService,
      { email, password },
    )
    yield put({ type: loginSuccessAction, payload: response })
    history.replace(from || '/')
    toast({
      title: 'Logged in.',
      description: 'You have successfully logged in.',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  } catch (err) {
    yield put({ type: loginFailureAction })
    toast({
      title: 'Failed to login.',
      description: 'Please check your credentials and try again.',
      status: 'error',
      duration: 4000,
      isClosable: true,
    })
  }
}

export default function* userSaga() {
  yield takeLatest(loginAction, loginSaga)
}

import { call, takeLatest, put, SagaReturnType } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/types'

import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './user.action'
import {
  loginService,
  LoginReqProp,
  signupService,
  SignupReqProp,
  history,
} from '../../services'

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
    // @ts-ignore
    history.replace(from)
    toast({
      title: 'Logged in.',
      description: 'You have successfully logged in.',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  } catch (err) {
    console.log(err)
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

interface registerSagaProps {
  type: typeof registerAction
  payload: SignupReqProp
}

function* registerSaga(action: registerSagaProps): SagaIterator {
  const { email, password, toast } = action.payload
  try {
    const response: SagaReturnType<typeof signupService> = yield call(
      signupService,
      { email, password },
    )
    yield put({ type: registerSuccessAction, payload: response })
    toast({
      title: 'Registered.',
      description: 'You have successfully registered.',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  } catch (err) {
    yield put({ type: registerFailureAction })
    toast({
      title: 'Failed to register.',
      description: 'Oops! Something went wrong.',
      status: 'error',
      duration: 4000,
      isClosable: true,
    })
  }
}

export default function* userSaga() {
  yield takeLatest(loginAction, loginSaga)
  yield takeLatest(registerAction, registerSaga)
}

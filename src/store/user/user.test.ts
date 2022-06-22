import { call, put } from 'redux-saga/effects'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './user.action'
import UserReducer, { Props, initialState } from './user.reducer'
import { loginSaga, registerSaga } from './user.saga'
import { loginService, signupService } from '../../services'

describe('testing user reducer', () => {
  test('try login in', async () => {
    // Arrange
    const newState: Props = { ...initialState, isLoading: true }
    //newState.isLoading = true

    const action: any = {
      type: loginAction,
    }

    // Act
    const state = UserReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('login success', async () => {
    // Arrange
    const user = {
      uid: '12345',
      email: 'bizan@hooli.com',
      displayName: 'Bizan',
      accessToken: '12345',
    }

    const newState: Props = {
      ...initialState,
      isLoading: false,
      isLoggedIn: true,
      user,
    }

    const action: any = {
      type: loginSuccessAction,
      payload: user,
    }

    // Act
    const state = UserReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('login failure', async () => {
    // Arrange
    const newState: Props = {
      ...initialState,
      isLoading: false,
      isLoggedIn: false,
    }

    const action: any = {
      type: loginFailureAction,
    }

    // Act
    const state = UserReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('trys registering the user', async () => {
    // Arrange
    const newState: Props = {
      ...initialState,
      isLoading: true,
    }

    const action: any = {
      type: registerAction,
    }

    // Act
    const state = UserReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('register success', async () => {
    // Arrange
    const user = {
      uid: '12345',
      email: 'bizan@hooli.com',
      displayName: 'Bizan',
      accessToken: '12345',
    }

    const newState: Props = {
      ...initialState,
      isLoading: false,
      isLoggedIn: true,
      user,
    }

    const action: any = {
      type: registerSuccessAction,
      payload: user,
    }

    // Act
    const state = UserReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('register failure', async () => {
    // Arrange
    const newState: Props = {
      ...initialState,
      isLoading: false,
      isLoggedIn: false,
    }

    const action: any = {
      type: registerFailureAction,
    }

    // Act
    const state = UserReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })
})

describe('testing user saga', () => {
  test('success triggers success action with user login', () => {
    // Arrange

    const generator = loginSaga({
      type: loginAction,
      payload: {
        email: 'bizan@hooli.com',
        password: '12345',
        toast: {},
        from: '',
      },
    })

    const user = {
      uid: '12345',
      email: 'bizan@hooli.com',
      displayName: 'Bizan',
      accessToken: '12345',
    }

    // Act
    const loginEffect = generator.next({
      email: 'bizan@hooli.com',
      password: '12345',
    }).value
    const loginSuccessEffect = generator.next(user).value

    // Assert
    expect(loginEffect).toEqual(
      call(loginService, { email: 'bizan@hooli.com', password: '12345' }),
    )
    expect(loginSuccessEffect).toEqual(
      put({ type: loginSuccessAction, payload: user }),
    )
  })

  test('failure triggers failure login action', () => {
    // Arrange
    const generator = loginSaga({
      type: loginAction,
      payload: {
        email: 'bizan@hooli.com',
        password: '12345',
        toast: {},
        from: '',
      },
    })

    // Act
    const loginEffect = generator.next({
      email: 'bizan@hooli.com',
      password: '12345',
    }).value
    // @ts-ignore
    const loginFailureEffect = generator.throw().value

    // Assert
    expect(loginEffect).toEqual(
      call(loginService, { email: 'bizan@hooli.com', password: '12345' }),
    )
    expect(loginFailureEffect).toEqual(put({ type: loginFailureAction }))
  })

  test('success triggers success action with user registration', () => {
    // Arrange
    const generator = registerSaga({
      type: registerAction,
      payload: {
        email: 'bizan@hooli.com',
        password: '12345',
        toast: {},
      },
    })

    const user = {
      uid: '12345',
      email: 'bizan@hooli.com',
      displayName: 'Bizan',
      accessToken: '12345',
    }

    // Act
    const signupEffect = generator.next({
      email: 'bizan@hooli.com',
      password: '12345',
    }).value
    const signupSuccess = generator.next(user).value

    // Assert
    expect(signupEffect).toEqual(
      call(signupService, { email: 'bizan@hooli.com', password: '12345' }),
    )
    expect(signupSuccess).toEqual(
      put({ type: registerSuccessAction, payload: user }),
    )
  })

  test('failure triggers failure register action', () => {
    // Arrange
    const generator = registerSaga({
      type: registerAction,
      payload: {
        email: 'bizan@hooli.com',
        password: '12345',
        toast: {},
      },
    })

    // Act
    const signupEffect = generator.next({
      email: 'bizan@hooli.com',
      password: '12345',
    }).value
    // @ts-ignore
    const signupEffectFailure = generator.throw().value

    // Assert
    expect(signupEffect).toEqual(
      call(signupService, { email: 'bizan@hooli.com', password: '12345' }),
    )
    expect(signupEffectFailure).toEqual(put({ type: registerFailureAction }))
  })
})

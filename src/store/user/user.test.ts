import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './user.action'
import UserReducer, { Props, initialState } from './user.reducer'

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

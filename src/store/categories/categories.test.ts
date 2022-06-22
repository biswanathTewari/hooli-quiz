import { call, takeLatest, put } from 'redux-saga/effects'
import {
  getCategoriesAction,
  getCategoriesSuccessAction,
  getCategoriesFailureAction,
} from './categories.action'
import CategoriesReducer from './categories.reducer'
import { getCategoriesService, Category } from '../../services'
import { initialState, Props } from './categories.reducer'
import { getCategoriesSaga } from './categories.saga'

// Test: reducers
describe('testing categroies reducer', () => {
  test('loading categories', async () => {
    // Arrange
    const newState: Props = {
      isLoading: true,
      categoryList: [],
    }

    const action: any = {
      type: getCategoriesAction,
    }

    // Act
    const state = CategoriesReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('set categories on succesful api call', async () => {
    // Arrange
    const categoryList = [
      {
        id: '12345',
        description: 'sample category',
        image: 'www.google.com',
        questionsCount: '5',
        title: 'sample quiz',
      },
    ]

    initialState.isLoading = true

    const newState: Props = {
      isLoading: false,
      categoryList,
    }

    const action: any = {
      type: getCategoriesSuccessAction,
      payload: categoryList,
    }

    // Act
    const state = CategoriesReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('set categories on failed api call', async () => {
    // Arrange
    const action: any = {
      type: getCategoriesFailureAction,
    }

    initialState.isLoading = true

    const newState: Props = {
      isLoading: false,
      categoryList: [],
    }

    // Act
    const state = CategoriesReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })
})

// Test: sagas
describe('testing categories saga', () => {
  test('success triggers success action with categories', () => {
    // Arrange
    const generator = getCategoriesSaga()
    const response: Array<Category> = [
      {
        id: '12345',
        description: 'sample category',
        image: 'www.google.com',
        questionsCount: '5',
        title: 'sample quiz',
      },
    ]

    // Act
    // it returns a call effect, which is a function call and not the actual api response
    const getCategoriesEffect = generator.next().value
    const successEffect = generator.next(response).value

    // Assert
    expect(getCategoriesEffect).toEqual(call(getCategoriesService))
    expect(successEffect).toEqual(
      put({ type: getCategoriesSuccessAction, payload: response }),
    )
    expect(generator.next()).toEqual({ done: true, value: undefined }) // end of generator
  })

  test('failure action triggers failure action', () => {
    // Arrange
    const generator = getCategoriesSaga()

    // Act
    const getCategoriesEffect = generator.next().value
    // @ts-ignore
    const failureEffect = generator.throw().value //catch branch

    // Assert
    expect(getCategoriesEffect).toEqual(call(getCategoriesService))
    expect(failureEffect).toEqual(put({ type: getCategoriesFailureAction }))
    expect(generator.next()).toEqual({ done: true, value: undefined }) // end of generator
  })
})

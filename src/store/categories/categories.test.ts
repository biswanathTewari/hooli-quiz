import {
  getCategoriesAction,
  getCategoriesSuccessAction,
  getCategoriesFailureAction,
} from './categories.action'
import CategoriesReducer from './categories.reducer'
import { initialState, Props } from './categories.reducer'

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

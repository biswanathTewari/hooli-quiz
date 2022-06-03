import { Category } from '../../services'
import {
  getCategoriesAction,
  getCategoriesSuccessAction,
  getCategoriesFailureAction,
} from './categories.action'

interface Props {
  isLoading: boolean
  categoryList: Array<Category>
}

const initialState: Props = {
  isLoading: false,
  categoryList: [],
}

const CategoriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getCategoriesAction:
      return {
        ...state,
        isLoading: true,
      }

    case getCategoriesSuccessAction:
      return {
        ...state,
        isLoading: false,
        categoryList: action.payload,
      }

    case getCategoriesFailureAction:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default CategoriesReducer

import { UserProp } from '../../services'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './user.action'

export interface Props {
  isLoading: boolean
  isLoggedIn: boolean
  user: UserProp
}

export const initialState: Props = {
  isLoading: false,
  isLoggedIn: false,
  user: {
    uid: '',
    email: '',
    displayName: '',
    accessToken: '',
  },
}

const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginAction:
      return {
        ...state,
        isLoading: true,
      }
    case loginSuccessAction:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isLoggedIn: true,
      }
    case loginFailureAction:
      return {
        ...state,
        isLoading: false,
      }
    case registerAction:
      return {
        ...state,
        isLoading: true,
      }
    case registerSuccessAction:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isLoggedIn: true,
      }
    case registerFailureAction:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default UserReducer

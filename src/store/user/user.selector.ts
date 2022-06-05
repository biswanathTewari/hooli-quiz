import { AppState } from '../index'

export const getIsUserLoading = (state: AppState) => state.User.isLoading

export const getIsLoggedIn = (state: AppState) => state.User.isLoggedIn

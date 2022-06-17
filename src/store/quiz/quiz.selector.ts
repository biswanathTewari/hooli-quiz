import { AppState } from '../index'

export const getQuizIsLoading = (state: AppState) => state.Quiz.isLoading

export const getQuizInfo = (state: AppState) => state.Quiz.info

export const getQuizQuestions = (state: AppState) => state.Quiz.questions

export const getQuizScore = (state: AppState) => state.Quiz.score

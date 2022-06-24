import { Quiz, Question } from '../../services'
import {
  getQuizAction,
  getQuizFailureAction,
  getQuizSuccessAction,
  setUserRepAction,
  clearScoreAction,
} from './quiz.actions'

export interface Props extends Quiz {
  isLoading: boolean
  score: number
}

export const initialState: Props = {
  isLoading: false,
  info: {
    id: '',
    image: '',
    title: '',
    questionsCount: '',
    description: '',
    time: '',
  },
  questions: [],
  score: 0,
}

const QuizReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getQuizAction:
      return {
        ...state,
        isLoading: true,
      }

    case getQuizSuccessAction:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      }

    case getQuizFailureAction:
      return {
        ...state,
        isLoading: false,
      }

    case setUserRepAction: {
      let newScore = state.score
      let tempQuestions: Array<Question> = state.questions.map(
        (question: Question) => {
          if (question.id === action.payload.id) {
            if (action.payload.userRep === question.answer) newScore += 10
            return {
              ...question,
              userRep: action.payload.userRep,
            }
          }
          return question
        },
      )
      return {
        ...state,
        score: newScore,
        questions: tempQuestions,
      }
    }

    case clearScoreAction:
      return initialState

    default:
      return state
  }
}

export default QuizReducer

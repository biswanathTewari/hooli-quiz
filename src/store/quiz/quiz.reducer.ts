import { Quiz, Question } from '../../services'
import {
  getQuizAction,
  getQuizFailureAction,
  getQuizSuccessAction,
} from './quiz.actions'

interface QuestionRes extends Question {
  userRep: string
}

interface Props extends Quiz {
  isLoading: boolean
  questions: Array<QuestionRes>
}

const initialState: Props = {
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

    default:
      return state
  }
}

export default QuizReducer

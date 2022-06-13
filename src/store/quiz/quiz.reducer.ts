import { Quiz, Question } from '../../services'
import {
  getQuizAction,
  getQuizFailureAction,
  getQuizSuccessAction,
  setUserRepAction,
} from './quiz.actions'

interface Props extends Quiz {
  isLoading: boolean
  questions: Array<Question>
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

    case setUserRepAction: {
      let tempQuestions: Array<Question> = state.questions.map(
        (question: Question) => {
          if (question.id === action.payload.id) {
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
        questions: tempQuestions,
      }
    }

    default:
      return state
  }
}

export default QuizReducer

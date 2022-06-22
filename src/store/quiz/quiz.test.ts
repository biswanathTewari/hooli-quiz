import {
  getQuizAction,
  getQuizFailureAction,
  getQuizSuccessAction,
  setUserRepAction,
  clearScoreAction,
} from './quiz.actions'
import { initialState, Props } from './quiz.reducer'
import QuizReducer from './quiz.reducer'

describe('testing quiz reducer', () => {
  test('loading quiz', async () => {
    // Arrange
    const newState: Props = initialState
    newState.isLoading = true

    const action: any = {
      type: getQuizAction,
    }

    // Act
    const state = QuizReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('set quiz on successful api call', async () => {
    // Arrange
    const questions = [
      {
        id: '12345',
        question: 'sample question',
        answer: 'sample answer',
        A: 'sample A',
        B: 'sample B',
        C: 'sample C',
        D: 'sample D',
        userRep: 'NA',
      },
    ]

    const payload = {
      info: {
        id: '12345',
        image: 'www.google.com',
        title: 'sample quiz',
        questionsCount: '5',
        description: 'sample description',
        time: '5',
      },
      questions,
    }

    initialState.isLoading = true

    const newState: Props = {
      isLoading: false,
      score: 0,
      ...payload,
    }

    const action: any = {
      type: getQuizSuccessAction,
      payload,
    }

    // Act
    const state = QuizReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('set quiz on failed api call', async () => {
    // Arrange
    const newState: Props = { ...initialState, isLoading: false }

    initialState.isLoading = true

    const action: any = {
      type: getQuizFailureAction,
    }

    // Act
    const state = QuizReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('set user rep', async () => {
    // Arrange
    const payload = {
      id: '12345',
      userRep: 'sample A',
    }

    const initialState: Props = {
      isLoading: false,
      info: {
        id: '12345',
        image: 'www.google.com',
        title: 'sample quiz',
        questionsCount: '1',
        description: 'sample description',
        time: '5',
      },
      questions: [
        {
          id: '12345',
          question: 'sample question',
          answer: 'sample A',
          A: 'sample A',
          B: 'sample B',
          C: 'sample C',
          D: 'sample D',
          userRep: 'NA',
        },
      ],
      score: 0,
    }

    const newState: Props = {
      ...initialState,
      score: 10,
      questions: [
        {
          id: '12345',
          question: 'sample question',
          answer: 'sample A',
          A: 'sample A',
          B: 'sample B',
          C: 'sample C',
          D: 'sample D',
          userRep: 'sample A',
        },
      ],
    }

    const action: any = {
      type: setUserRepAction,
      payload,
    }

    // Act
    const state = QuizReducer(initialState, action)

    // Assert
    expect(state).toEqual(newState)
  })

  test('reset quiz reducer', async () => {
    // Arrange
    const preState: Props = {
      isLoading: false,
      info: {
        id: '12345',
        image: 'www.google.com',
        title: 'sample quiz',
        questionsCount: '1',
        description: 'sample description',
        time: '5',
      },
      questions: [
        {
          id: '12345',
          question: 'sample question',
          answer: 'sample A',
          A: 'sample A',
          B: 'sample B',
          C: 'sample C',
          D: 'sample D',
          userRep: 'NA',
        },
      ],
      score: 0,
    }

    const newState: Props = initialState

    const action: any = {
      type: clearScoreAction,
    }

    // Act
    const state = QuizReducer(preState, action)

    // Assert
    expect(state).toEqual(newState)
  })
})

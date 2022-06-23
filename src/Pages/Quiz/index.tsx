import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'

import Rules from './Rules'
import Play from './Play'
import Review from './Review'
import { Navbar } from '../../components'
import { useDocumentTitle } from '../../hooks'
import {
  getQuizAction,
  getQuizInfo,
  getQuizIsLoading,
  getQuizQuestions,
  setUserRepAction,
  getQuizScore,
  clearScoreAction,
} from '../../store'

const Quiz = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const bgColor = useColorModeValue('white', '#282f3c')
  const containerColor = useColorModeValue('gray.50', '')
  const [mode, setMode] = React.useState<'rules' | 'play' | 'review'>('rules')
  const info = useSelector(getQuizInfo)
  const isLoading = useSelector(getQuizIsLoading)
  const questions = useSelector(getQuizQuestions)
  const score = useSelector(getQuizScore)
  const totalScore = questions.length * 10
  useDocumentTitle(`Quiz | Hooli`)

  const handleResponse = (userRep: string, id: string) => {
    dispatch({ type: setUserRepAction, payload: { userRep, id } })
  }

  const newQuiz = () => {
    dispatch({ type: clearScoreAction })
    navigate('/')
  }

  React.useEffect(() => {
    dispatch({ type: getQuizAction, payload: { id } })
  }, [])

  return (
    <Box px={10} py={3.5} minH={'100vh'} bg={containerColor}>
      <Navbar />
      <Box
        width={'100%'}
        minHeight={'90%'}
        boxShadow="2xl"
        borderRadius={'2rem'}
        margin={'2rem auto'}
        padding={'1.5rem 2.5rem'}
        bg={bgColor}
      >
        {mode === 'rules' && (
          <Rules info={info} loading={isLoading} onStart={setMode} />
        )}
        {mode === 'play' && (
          <Play
            info={info}
            loading={isLoading}
            questions={questions}
            handleResponse={handleResponse}
            score={score}
            totalScore={totalScore}
            onReview={() => setMode('review')}
          />
        )}
        {mode === 'review' && (
          <Review
            questions={questions}
            score={String((score / totalScore) * 100)}
            onNewQuiz={newQuiz}
          />
        )}
      </Box>
    </Box>
  )
}

export { Quiz }

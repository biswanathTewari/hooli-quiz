import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'

import Rules from './Rules'
import Play from './Play'
import { Navbar } from '../../components'
import { getQuizAction, getQuizInfo, getQuizIsLoading } from '../../store'

const Quiz = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const bgColor = useColorModeValue('white', '#282f3c')
  const containerColor = useColorModeValue('gray.50', '')
  const [mode, setMode] = React.useState<'rules' | 'play' | 'results'>('rules')
  const info = useSelector(getQuizInfo)
  const isLoading = useSelector(getQuizIsLoading)

  React.useEffect(() => {
    dispatch({ type: getQuizAction, payload: { id } })
  }, [])

  return (
    <Box px={10} py={3.5} height={'100vh'} bg={containerColor}>
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
        {mode === 'play' && <Play info={info} loading={isLoading} />}
      </Box>
    </Box>
  )
}

export { Quiz }

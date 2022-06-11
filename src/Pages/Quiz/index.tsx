import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

import Rules from './Rules'
import { Navbar } from '../../components'

const Quiz = () => {
  const bgColor = useColorModeValue('white', '#282f3c')
  const containerColor = useColorModeValue('gray.50', '')
  const [mode] = React.useState<'rules' | 'quiz' | 'results'>('rules')

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
        {mode === 'rules' && <Rules />}
      </Box>
    </Box>
  )
}

export { Quiz }

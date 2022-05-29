import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'

import { Landing } from './Pages'
import './styles.scss'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Landing />
  </ChakraProvider>
)

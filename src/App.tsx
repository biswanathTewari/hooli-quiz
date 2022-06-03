import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Provider } from 'react-redux'

import { Landing } from './Pages'
import { store } from './store'
import './styles.scss'

export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Landing />
    </ChakraProvider>
  </Provider>
)

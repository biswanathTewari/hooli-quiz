import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './navigation'
import { store } from './store'
import './styles.scss'

export const App = () => (
  <Router>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Navigation />
      </ChakraProvider>
    </Provider>
  </Router>
)

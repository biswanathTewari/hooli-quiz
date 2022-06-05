import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'

import Navigation from './navigation'
import { history } from './services'
import { store } from './store'
import './styles.scss'

export const App = () => (
  <HistoryRouter history={history}>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Navigation />
      </ChakraProvider>
    </Provider>
  </HistoryRouter>
)

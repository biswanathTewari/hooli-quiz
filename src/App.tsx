import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'

import Navigation from './navigation'
import { history } from './services'
import { store, persistor } from './store'
import './styles.scss'

export const App = () => (
  <HistoryRouter history={history}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Navigation />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </HistoryRouter>
)

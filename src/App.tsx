import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './components'
import './styles.css'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>
            {"It's the"} <Code fontSize="xl">start</Code> of something really
            cool.
          </Text>
          <Link
            color="teal.500"
            href="https://linktr.ee/iambiswanath"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stalk me
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)

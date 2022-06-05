import React from 'react'
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Flex,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from '@chakra-ui/react'

import { PrimaryButton } from '../../components'
import { BooksBG, QuotesPNG, VectorPNG } from '../../assets/images'

const Login = () => {
  const textColor = useColorModeValue('black', 'white')

  return (
    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', '45% 1fr']}>
      <GridItem
        w={['100%']}
        display={['none', 'none', 'flex']}
        h="100vh"
        bgImage={`url(${BooksBG})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <Flex
          backdropFilter="blur(5px)"
          h={'100%'}
          w={'100%'}
          alignItems="center"
        >
          <Box
            w={'18rem'}
            marginLeft="auto"
            marginRight={'5rem'}
            position="relative"
            padding={'1.5rem'}
          >
            <Image
              src={QuotesPNG}
              alt="Quotes"
              position={'absolute'}
              top="0"
              left={'0'}
            />
            <Text fontSize={'md'}>
              Those people who develop the ability to continuously acquire new
              and better forms of knowledge that they can apply to their work
              and to their lives will be the movers and shakers in our society
              for the indefinite future - Brian Tracy
            </Text>
            <Image
              src={VectorPNG}
              alt="vector"
              position={'absolute'}
              bottom="0"
              right={'0'}
            />
          </Box>
        </Flex>
      </GridItem>
      <GridItem w={['100%']} h="100vh" bg={'white.200'}>
        <Flex
          w={'100%'}
          h="100%"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box color={textColor}>
            <Text fontSize={'x-large'} fontWeight="700">
              Login to your account
            </Text>
            <Text fontSize={'small'} fontWeight="400" color={'gray.400'}>
              with your registered email
            </Text>
            <FormControl isRequired mt={'3rem'}>
              <FormLabel htmlFor="first-name" fontSize="medium">
                Email
              </FormLabel>
              <Input
                id="first-name"
                placeholder="bizan@hooli.com"
                fontSize="medium"
              />
            </FormControl>

            <FormControl isRequired mt={'1rem'}>
              <FormLabel htmlFor="first-name" fontSize="medium">
                Password
              </FormLabel>
              <Input
                id="first-name"
                placeholder="main nahi bataunga"
                type={'password'}
                fontSize="medium"
              />
            </FormControl>
            <Checkbox fontSize={'1rem'} defaultChecked mt={'1rem'}>
              Remember me
            </Checkbox>

            <Flex w={'100%'} justifyContent="center" mt={'2rem'}>
              <PrimaryButton
                isLoading={false}
                loadingText="Logging in..."
                text="Login"
                onClick={() => {}}
                styles={{
                  padding: '1rem 4.5rem',
                }}
              />
            </Flex>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export { Login }

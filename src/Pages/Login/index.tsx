import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as ReachLink, useLocation, Navigate } from 'react-router-dom'
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
  Link,
  HStack,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react'
import { AiOutlineLeft } from 'react-icons/ai'

import { PrimaryButton } from '../../components'
import { useAuthForm } from '../../hooks'
import { getIsLoggedIn, loginAction, getIsUserLoading } from '../../store'
import { BooksBG, QuotesPNG, VectorPNG } from '../../assets/images'

const Login = () => {
  const textColor = useColorModeValue('black', 'white')
  const {
    creds,
    error,
    onBlurHandler,
    onChangeHandler,
    hackHandler,
    validateForm,
    resetForm,
  } = useAuthForm('', true)
  const toast = useToast()
  const dispatch = useDispatch()
  const location: any = useLocation()
  const from = location.state ? location.state.from?.pathname : '/'
  const isLoggedIn = useSelector(getIsLoggedIn)
  const isLoading = useSelector(getIsUserLoading)

  const onSubmitHandler = (e: any) => {
    e.preventDefault()
    if (validateForm()) {
      const payload = {
        email: creds.email,
        password: creds.password,
        toast,
        from,
      }
      dispatch({ type: loginAction, payload })
      resetForm()
    } else {
      toast({
        title: 'Bhai kya kar raha hai tu? hack karna hai.',
        description: 'Please login now.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  const htmlHacker = (e: any) => {
    e.preventDefault()
    hackHandler()
    toast({
      title: 'Succesfully hacked.',
      description: 'Please press on login.',
      status: 'info',
      duration: 4000,
      isClosable: true,
    })
  }

  if (isLoggedIn) return <Navigate to={'/'} replace />

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
          position="relative"
        >
          <Box color={textColor}>
            <Text fontSize={'x-large'} fontWeight="700">
              Login to your account
            </Text>
            <Text fontSize={'small'} fontWeight="400" color={'gray.400'}>
              with your registered email
            </Text>
            <FormControl
              isRequired
              mt={'3rem'}
              isInvalid={error?.email ? true : false}
            >
              <FormLabel htmlFor="email" fontSize="medium">
                Email
              </FormLabel>
              <Input
                id="email"
                placeholder="bizan@hooli.com"
                fontSize="medium"
                value={creds.email}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error.email && (
                <FormErrorMessage>{error.email}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isRequired
              mt={'1rem'}
              isInvalid={error?.password ? true : false}
            >
              <FormLabel htmlFor="password" fontSize="medium">
                Password
              </FormLabel>
              <Input
                id="password"
                placeholder="main nahi bataunga"
                type={'password'}
                fontSize="medium"
                value={creds.password}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error.password && (
                <FormErrorMessage>{error.password}</FormErrorMessage>
              )}
            </FormControl>
            <Checkbox fontSize={'1rem'} defaultChecked mt={'1rem'}>
              Remember me
            </Checkbox>

            <Flex
              w={'100%'}
              flexDirection="column"
              alignItems="center"
              mt={'2rem'}
            >
              <PrimaryButton
                isLoading={isLoading}
                loadingText="Logging in..."
                text="Login"
                onClick={onSubmitHandler}
                styles={{
                  padding: '1rem 4.5rem',
                }}
              />
              <PrimaryButton
                isLoading={false}
                loadingText="hacking..."
                text="Hack"
                onClick={htmlHacker}
                styles={{
                  padding: '1rem 4.5rem',
                  marginTop: '1rem',
                }}
              />

              <Text position={'absolute'} bottom="5rem" fontSize={'small'}>
                New here?{' '}
                <Link
                  as={ReachLink}
                  to="/signup"
                  color="teal.500"
                  fontSize={'small'}
                >
                  Create new Account
                </Link>
              </Text>
            </Flex>
          </Box>
          <HStack position={'absolute'} top={'3rem'} left={'4rem'}>
            <AiOutlineLeft />
            <Link as={ReachLink} to="/" fontSize={'sm'}>
              Back{' '}
            </Link>
          </HStack>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export { Login }

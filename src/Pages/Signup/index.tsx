import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as ReachLink, Navigate } from 'react-router-dom'
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
import { useAuthForm, useDocumentTitle } from '../../hooks'
import { getIsLoggedIn, registerAction, getIsUserLoading } from '../../store'
import { BooksBG, QuotesPNG, VectorPNG } from '../../assets/images'

const Signup = () => {
  const textColor = useColorModeValue('black', 'white')
  const {
    creds,
    error,
    onBlurHandler,
    onChangeHandler,
    validateForm,
    resetForm,
    checkHandler,
  } = useAuthForm('Please agree to the terms and conditions')
  const toast = useToast()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn)
  const isLoading = useSelector(getIsUserLoading)
  useDocumentTitle('Signup | Hooli')

  const onSubmitHandler = (e: any) => {
    e.preventDefault()
    if (validateForm()) {
      const payload = {
        email: creds.email,
        password: creds.password,
        toast,
      }
      dispatch({ type: registerAction, payload })
      resetForm()
    } else {
      toast({
        title: 'Something went wrong',
        description: 'Please try again.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
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
              Sign up
            </Text>
            <Text fontSize={'small'} fontWeight="400" color={'gray.400'}>
              create new account
            </Text>
            <FormControl
              isRequired
              mt={'3rem'}
              isInvalid={error?.fullName ? true : false}
            >
              <FormLabel htmlFor="fullName" fontSize="medium">
                Name
              </FormLabel>
              <Input
                id="fullName"
                placeholder="Your name"
                fontSize="medium"
                value={creds.fullName}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error.fullName && (
                <FormErrorMessage>{error.fullName}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isRequired
              mt={'1rem'}
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
              <Box maxWidth={'20rem'}>
                {error.password && (
                  <FormErrorMessage fontSize={'small'}>
                    {error.password}
                  </FormErrorMessage>
                )}
              </Box>
            </FormControl>

            <FormControl isInvalid={error?.checkValue ? true : false}>
              <Checkbox
                fontSize={'1rem'}
                isInvalid={error?.checkValue ? true : false}
                mt={'1rem'}
                checked={creds.checkValue}
                onChange={checkHandler}
                id="remember"
              >
                I accept the terms and conditions
              </Checkbox>
              {error.checkValue && (
                <FormErrorMessage>{error.checkValue}</FormErrorMessage>
              )}
            </FormControl>

            <Flex
              w={'100%'}
              flexDirection="column"
              alignItems="center"
              mt={'2rem'}
            >
              <PrimaryButton
                isLoading={isLoading}
                loadingText="Creating..."
                text="Create account"
                onClick={onSubmitHandler}
                styles={{
                  padding: '1rem 4.5rem',
                }}
              />

              <Text position={'absolute'} bottom="5rem" fontSize={'small'}>
                Already have an account?{' '}
                <Link
                  as={ReachLink}
                  to="/login"
                  color="teal.500"
                  fontSize={'small'}
                >
                  Login
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

export { Signup }

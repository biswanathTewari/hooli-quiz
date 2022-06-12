import React from 'react'
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react'

import { DefaultImg } from '../../assets/images'
import { PrimaryButton, Loader } from '../../components'
import { Quiz } from '../../services'

interface Props extends Omit<Quiz, 'questions'> {
  loading: boolean
}

const Play = ({ info, loading }: Props) => {
  if (loading) return <Loader />
  return (
    <Box
      minH={'80vh'}
      w={'100%'}
      flexDir={'column'}
      position={'relative'}
      pb={'5rem'}
    >
      <Flex
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text fontSize={['x-large', 'xx-large', 'xx-large']} fontWeight="700">
          {info.title}
        </Text>
        <Text fontSize={['large', 'x-large', 'x-large']} fontWeight="700">
          {info.time} mins
        </Text>
      </Flex>
      <Text fontSize={['medium', 'large', 'large']} fontWeight="400">
        Answer the question below
      </Text>
      <Flex m={'1.5rem 0'} flexDirection={['column', 'column', 'row']}>
        <Box
          backgroundImage={DefaultImg}
          backgroundSize={'cover'}
          backgroundPosition={'center'}
          height={'12rem'}
          width={'18rem'}
          borderRadius={'1rem'}
          mr={'3rem'}
          mb={['2rem', '1rem', '0', '0']}
          overflow="hidden"
        >
          <Image
            src={info.image}
            alt="category"
            objectFit="initial"
            height={'100%'}
            width={'100%'}
          />
        </Box>
        <Box width={['70vw', '25rem', '30rem']}>
          <Text
            fontSize={['medium', 'medium', 'x-large', 'x-large']}
            fontWeight="extrabold"
            mb={'1rem'}
          >
            Question 1/5
          </Text>
          <Text
            fontSize={['small', 'small', 'medium', 'medium']}
            fontWeight="400"
            mb={'1rem'}
          >
            Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, as
            part of a protest against a bus company that refused to employ black
            and Asian drivers in which UK city?
          </Text>
        </Box>
      </Flex>
      <Text
        fontSize={['medium', 'x-large', 'x-large']}
        fontWeight="600"
        mb={'1.5rem'}
      >
        Choose answer
      </Text>
      <RadioGroup defaultValue="2">
        <Stack gap={'0.75rem'}>
          <Radio
            size="lg"
            name="1"
            value={'1'}
            colorScheme="teal"
            defaultChecked
          >
            Radio
          </Radio>
          <Radio
            size="lg"
            name="1"
            value={'2'}
            colorScheme="teal"
            defaultChecked
          >
            Radio
          </Radio>
          <Radio
            size="lg"
            name="1"
            value={'3'}
            colorScheme="teal"
            defaultChecked
          >
            Radio
          </Radio>
          <Radio
            size="lg"
            name="1"
            value={'4'}
            colorScheme="teal"
            defaultChecked
          >
            Radio
          </Radio>
        </Stack>
      </RadioGroup>

      <HStack
        spacing={'1rem'}
        width={'100%'}
        justifyContent={'flex-end'}
        position={'absolute'}
        bottom={'1rem'}
      >
        <PrimaryButton text="Back" onClick={() => {}} fontSize="md" />
        <PrimaryButton text="Start" onClick={() => {}} fontSize="md" />
      </HStack>
    </Box>
  )
}

export default Play

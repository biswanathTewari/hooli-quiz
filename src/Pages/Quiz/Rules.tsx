import React from 'react'
import {
  Box,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  GridItem,
} from '@chakra-ui/react'

import { DefaultImg } from '../../assets/images'
import { PrimaryButton } from '../../components'

const Rules = () => {
  return (
    <Box height={'100%'} width={'100%'} flexDir={'column'}>
      <Text fontSize={['x-large', 'xx-large', 'xx-large']} fontWeight="700">
        History Quiz
      </Text>
      <Text fontSize={['medium', 'large', 'large']} fontWeight="400">
        Read the following instructions
      </Text>
      <Flex flexWrap={'wrap'} m={'1.5rem 0'}>
        <Box
          backgroundImage={DefaultImg}
          backgroundSize={'cover'}
          backgroundPosition={'center'}
          height={'15rem'}
          width={'22rem'}
          borderRadius={'1rem'}
          mb={['2rem', '1rem', '0', '0']}
          overflow="hidden"
        >
          <Image
            src={''}
            alt="category"
            objectFit="initial"
            height={'13rem'}
            width={'20rem'}
          />
        </Box>
        <Grid
          flex={'1'}
          flexBasis={'content'}
          templateColumns={['9rem 1fr', '9rem 1fr', '8rem 1fr']}
        >
          <GridItem w="100%" h="100%" pl={['0', '1rem', '1rem']}>
            <Text
              fontSize={['small', 'small', 'large', 'large']}
              fontWeight="600"
              mb={'1rem'}
            >
              Date:
            </Text>
            <Text
              fontSize={['small', 'small', 'large', 'large']}
              fontWeight="600"
              mb={'1rem'}
            >
              Time Limit:
            </Text>
            <Text
              fontSize={['small', 'small', 'large', 'large']}
              fontWeight="600"
              mb={'1rem'}
            >
              Attempts:
            </Text>
            <Text
              fontSize={['small', 'small', 'large', 'large']}
              fontWeight="600"
              mb={'1rem'}
            >
              Points:
            </Text>
          </GridItem>
          <GridItem w="100%" h="100%" pl={'1rem'}>
            <Text
              fontSize={['small', 'small', 'large', 'large']}
              fontWeight="400"
              mb={'1rem'}
            >
              25/06/1999
            </Text>
            <Text
              fontSize={['small', 'small', 'large', 'large']}
              fontWeight="400"
              mb={'1rem'}
            >
              30mins
            </Text>
            <Text
              fontSize={['small', 'small', 'large', 'large']}
              fontWeight="400"
              mb={'1rem'}
            >
              Once
            </Text>
            <Text
              fontSize={['small', 'small', 'large', 'large']}
              fontWeight="400"
              mb={'1rem'}
            >
              100 points
            </Text>
          </GridItem>
        </Grid>
      </Flex>
      <Text
        fontSize={['large', 'x-large', 'x-large']}
        fontWeight="600"
        mb={'1.5rem'}
      >
        Instructions
      </Text>
      <Text fontSize={'md'} fontWeight="400">
        This quiz consists of 5 multiple-choice questions. To be successful with
        the quizzes, its important to conversant with the topics. Keep the
        following in mind:
      </Text>
      <Text fontSize={'md'} fontWeight="400" m={'1rem 0'}>
        Timing - You need to complete each of your attempts in one sitting, as
        you are allotted 30 minutes to each attempt.
      </Text>
      <Text fontSize={'md'} fontWeight="400">
        Answers - You may review your answer-choices and compare them to the
        correct answers after your final attempt. To start, click the
        &quot;Start&quot; button. When finished, click the &quot; Submit &quot;
        button.
      </Text>
      <HStack
        spacing={'1rem'}
        width={'100%'}
        justifyContent={'flex-end'}
        bottom={'1rem'}
        mt={['1rem', '2rem', '2rem']}
      >
        <PrimaryButton text="Back" onClick={() => {}} fontSize="md" />
        <PrimaryButton text="Start" onClick={() => {}} fontSize="md" />
      </HStack>
    </Box>
  )
}

export default Rules

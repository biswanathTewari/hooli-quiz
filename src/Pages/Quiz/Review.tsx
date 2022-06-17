import React from 'react'
import { Box, Flex, Image, Text, Radio, HStack } from '@chakra-ui/react'

import { PrimaryButton } from '../../components'
import { BadgePNG } from '../../assets/images'
import { Quiz } from '../../services'

interface Props extends Omit<Quiz, 'info'> {
  score?: string
  onNewQuiz: Function
}

interface QNAProps {
  question: string
  answer: string
  A: string
  B: string
  C: string
  D: string
  userRep: string
  index: number
}

interface RadioProps {
  value: string
  answer: string
  userRep: string
}

const MyRadio = ({ value, answer, userRep }: RadioProps) => {
  return (
    <Radio
      size="lg"
      name="A"
      value={value}
      isChecked={userRep === value || answer === value}
      colorScheme={answer === value ? 'teal' : userRep === value ? 'red' : ''}
    >
      {value}
    </Radio>
  )
}

const QNA = ({ question, answer, A, B, C, D, userRep, index }: QNAProps) => {
  return (
    <Box mb={'2rem'}>
      <Text
        fontSize={['medium', 'medium', 'large', 'large']}
        fontWeight="700"
        mt={'1rem'}
        mb={'0.25rem'}
      >
        {`Q${index + 1}. ${question}`}
      </Text>
      <Flex gap={'0.75rem'} flexDir={['column', 'column', 'row', 'row']}>
        <MyRadio value={A} answer={answer} userRep={userRep} />
        <MyRadio value={B} answer={answer} userRep={userRep} />
        <MyRadio value={C} answer={answer} userRep={userRep} />
        <MyRadio value={D} answer={answer} userRep={userRep} />
      </Flex>
    </Box>
  )
}

const Review = ({ score = '10', questions, onNewQuiz }: Props) => {
  return (
    <Box position={'relative'} pb={'1.5rem'}>
      <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
        <Image src={BadgePNG} alt="result" h={'7rem'} w={'7rem'} mb={'2rem'} />

        <Text fontSize={['medium', 'medium', 'large']} fontWeight={'700'}>
          Congratualtions!
        </Text>
        <Text fontSize={['small', 'small', 'medium']}>
          {`You scored ${score}%.`}
        </Text>
      </Flex>
      <Box w={'100%'}>
        {questions.length > 0 &&
          questions.map((question, index) => (
            <QNA key={index} index={index} {...question} />
          ))}
      </Box>
      <HStack
        spacing={'1rem'}
        width={'100%'}
        justifyContent={'flex-end'}
        position={'absolute'}
        bottom={'0.75rem'}
      >
        <PrimaryButton
          text="New Quiz"
          onClick={() => onNewQuiz()}
          fontSize="md"
        />
      </HStack>
    </Box>
  )
}

export default Review

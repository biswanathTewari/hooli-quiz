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
import {
  PrimaryButton,
  Loader,
  SubmitModal,
  ResultModal,
} from '../../components'
import { Quiz } from '../../services'

interface Props extends Quiz {
  loading: boolean
  handleResponse: Function
  score: number
  totalScore: number
  onReview: Function
}

const Play = ({
  info,
  loading,
  questions,
  handleResponse,
  score,
  totalScore,
  onReview,
}: Props) => {
  const [selected, setSelected] = React.useState<number>(0)
  const [userRes, setUserRes] = React.useState<string>('NA')
  const [showScore, setShowScore] = React.useState<boolean>(false)
  const [timeDisplay, setTimeDisplay] = React.useState<string>('00:00')
  const [time, setTime] = React.useState<number>(-1)

  const secondsToTime = (timeInSecs: number = 0) => {
    // let h = Math.floor(timeInSecs / 3600)
    //     .toString()
    //     .padStart(2, '0'),
    let m = Math.floor((timeInSecs % 3600) / 60)
        .toString()
        .padStart(2, '0'),
      s = Math.floor(timeInSecs % 60)
        .toString()
        .padStart(2, '0')

    return setTimeDisplay(`${m}m:${s}s`)
  }

  React.useEffect(() => {
    setTime(10) //Number(info.time) * 60
  }, [info.time])

  React.useEffect(() => {
    let interval: any

    if (time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1)
      }, 1000)
    } else if (time === 0) {
      clearInterval(interval)
      submitHandler()
      setShowScore(true)
    }

    secondsToTime(time)

    return () => clearInterval(interval)
  }, [time])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUserRes(e.target.value)
  }

  const nextHandler = () => {
    handleResponse(userRes, questions[selected].id)
    setUserRes('NA')
    if (selected + 1 === questions.length) return
    setSelected(selected + 1)
  }

  const submitHandler = () => {
    handleResponse(userRes, questions[selected].id)
    setUserRes('NA')
    return console.log('done open up the modal', questions)
  }

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
          {timeDisplay}
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
            {`Question ${selected + 1}/${questions.length}`}
          </Text>
          <Text
            fontSize={['small', 'small', 'medium', 'medium']}
            fontWeight="400"
            mb={'1rem'}
          >
            {questions[selected].question}
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
      <RadioGroup defaultValue="NA">
        <Stack gap={'0.75rem'}>
          <Radio
            size="lg"
            name="A"
            value={questions[selected].A}
            onChange={handleChange}
            colorScheme="teal"
          >
            {questions[selected].A}
          </Radio>
          <Radio
            size="lg"
            name="B"
            value={questions[selected].B}
            onChange={handleChange}
            colorScheme="teal"
          >
            {questions[selected].B}
          </Radio>
          <Radio
            size="lg"
            name="C"
            value={questions[selected].C}
            onChange={handleChange}
            colorScheme="teal"
          >
            {questions[selected].C}
          </Radio>
          <Radio
            size="lg"
            name="D"
            value={questions[selected].D}
            onChange={handleChange}
            colorScheme="teal"
          >
            {questions[selected].D}
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
        <SubmitModal
          submitHandler={submitHandler}
          onYes={() => setShowScore(true)}
        />
        {selected + 1 !== questions.length && (
          <PrimaryButton text="Next" onClick={nextHandler} fontSize="md" />
        )}
      </HStack>
      <ResultModal
        isOpen={showScore}
        score={String((score / totalScore) * 100)}
        onReview={onReview}
      />
    </Box>
  )
}

export default Play

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react'

import { colors } from '../../constants'
import { DefaultImg } from '../../assets/images'

interface Props {
  category: {
    title: string
    questionsCount: string
    image: string
    description: string
  }
}

const CategoryCard = ({ category }: Props) => {
  const cardColor = useColorModeValue('white', colors.darkSecondary)
  const textColor = useColorModeValue('black', 'white')
  const navigate = useNavigate()

  return (
    <Box
      className="category"
      minHeight={'20rem'}
      width={'20rem'}
      shadow={'xl'}
      backgroundColor={cardColor}
      transition={'transform 0.5s ease-in-out'}
      cursor={'pointer'}
      borderRadius={'1rem'}
      _hover={{
        transform: 'scale(1.1)',
      }}
      onClick={() => navigate(`/quiz`)}
    >
      <Box
        backgroundImage={DefaultImg}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        height={'13rem'}
        width={'20rem'}
        borderRadius={'1rem'}
        overflow="hidden"
      >
        <Image
          src={category.image}
          alt="category"
          objectFit="initial"
          height={'13rem'}
          width={'20rem'}
        />
      </Box>
      <Box w={'100%'} minHeight="5rem" p={'1rem'}>
        <Text
          fontSize={'medium'}
          fontWeight="bold"
          textAlign="left"
          color={textColor}
        >
          {category.title}
        </Text>
        <Text fontSize={'small'} textAlign="left" color={textColor} mt="0.5rem">
          {category.description} <br /> {category.questionsCount} questions
        </Text>
      </Box>
    </Box>
  )
}

export { CategoryCard }

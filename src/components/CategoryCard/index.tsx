import React from 'react'
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react'

import { colors } from '../../constants'
import { DefaultImg } from '../../assets/images'

const CategoryCard = () => {
  const cardColor = useColorModeValue('white', colors.darkSecondary)
  const textColor = useColorModeValue('black', 'white')

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
          src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fdb0c0c13603e8d2724dde07cee6bf1010d9f16633ad30fd71d6d14267bab92e._RI_V_TTW_.jpg"
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
          I dont play the odds, i play the man!
        </Text>
        <Text fontSize={'small'} textAlign="left" color={textColor} mt="0.5rem">
          Try the quiz to test yourself. <br /> 5 questions
        </Text>
      </Box>
    </Box>
  )
}

export { CategoryCard }

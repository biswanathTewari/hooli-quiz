import React from 'react'
import {
  Box,
  Text,
  Code,
  Grid,
  Flex,
  useDisclosure,
  ScaleFade,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { PrimaryButton, CategoryCard, Navbar } from '../../components'
import { getCategoriesAction, categoriesState } from '../../store'
import NavigationActions from '../../navigation/NavigationActions'
import { Barney } from '../../assets/images'
import './styles.scss'

const Landing = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isOpen, onToggle } = useDisclosure()
  const categories = useSelector(categoriesState)

  React.useEffect(() => {
    NavigationActions.setNavigation(navigate)
  }, [])

  React.useEffect(() => {
    dispatch({ type: getCategoriesAction })
  }, [])

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" px={10} py={3.5}>
        <Navbar />
        <Flex
          // eslint-disable-next-line react/require-default-props
          backgroundImage={Barney}
          backgroundSize="cover"
          backgroundPosition={['center', 'initial']}
          height={['30vh', '30vh', '50vh', '42vh', '42vh']}
          width={'100%'}
          borderRadius={'2rem'}
          margin={'2rem auto'}
          padding={'0 3rem'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems="flex-start"
        >
          <Text
            fontSize="large"
            margin={'0 0 1.5rem 0'}
            textAlign="left"
            color={'white'}
          >
            Are you {''}
            <Code fontSize="xl">hoolified</Code> enough to be a Web series nerd
            ?
          </Text>

          <PrimaryButton
            text={isOpen ? 'Chicken out' : 'Let me in'}
            onClick={onToggle}
          />
        </Flex>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Flex
            px={10}
            color="white"
            justifyContent={[
              'center',
              'center',
              'center',
              'flex-start',
              'space-between',
            ]}
            gap="2rem"
            flexWrap="wrap"
            minH={'25rem'}
          >
            {categories &&
              categories.map((category: any, index: number) => (
                <CategoryCard category={category} key={index} />
              ))}
          </Flex>
        </ScaleFade>
      </Grid>
    </Box>
  )
}

export { Landing }

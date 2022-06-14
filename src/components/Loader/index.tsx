import React from 'react'
import Lottie from 'react-lottie'
import { Flex } from '@chakra-ui/react'

import animation from '../../assets/lottie/loader.json'

const defaultOptions: any = {
  loop: true,
  autoplay: true,
  animationData: animation,
}

const Loader = () => {
  return (
    <Flex alignItems={'center'} height={'75vh'} width={'100%'}>
      <Lottie options={defaultOptions} height={'35vh'} speed={1} />
    </Flex>
  )
}

export { Loader }

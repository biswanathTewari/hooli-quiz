import React from 'react'
import Lottie from 'react-lottie'
import { Box } from '@chakra-ui/react'

import animation from '../../assets/lottie/loader.json'

const defaultOptions: any = {
  loop: true,
  autoplay: true,
  animationData: animation,
}

const Loader = () => {
  return (
    <Box height={'100%'} width={'100%'}>
      <Lottie options={defaultOptions} height={'75vh'} speed={1} />
    </Box>
  )
}

export { Loader }

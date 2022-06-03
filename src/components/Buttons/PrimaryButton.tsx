import React from 'react'

import { Button } from '@chakra-ui/react'

interface Props {
  text: string
  onClick: () => void
  styles?: {}
}

const PrimaryButton = ({ text, onClick, styles = {} }: Props) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      fontSize="large"
      borderRadius={'2rem'}
      padding={'1rem 2.5rem'}
      style={styles}
    >
      {text}
    </Button>
  )
}

export { PrimaryButton }

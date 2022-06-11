import React from 'react'

import { Button } from '@chakra-ui/react'

interface Props {
  text: string
  onClick: any
  styles?: {}
  isLoading?: boolean
  loadingText?: string
  fontSize?: string
}

const PrimaryButton = ({
  text,
  onClick,
  styles = {},
  isLoading = false,
  loadingText = '',
  fontSize = 'large',
}: Props) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      fontSize={fontSize}
      isLoading={isLoading}
      loadingText={loadingText}
      borderRadius={'2rem'}
      padding={'1rem 2.5rem'}
      style={styles}
    >
      {text}
    </Button>
  )
}

export { PrimaryButton }

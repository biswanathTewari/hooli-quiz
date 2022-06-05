import React from 'react'

import { Button } from '@chakra-ui/react'

interface Props {
  text: string
  onClick: () => void
  styles?: {}
  isLoading?: boolean
  loadingText?: string
}

const PrimaryButton = ({
  text,
  onClick,
  styles = {},
  isLoading = false,
  loadingText = '',
}: Props) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      fontSize="large"
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

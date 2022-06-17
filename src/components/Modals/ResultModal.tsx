import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react'

import { BadgePNG } from '../../assets/images'

interface Props {
  isOpen: boolean
  score: string
  onReview: Function
}

const ResultModal = ({ isOpen, score, onReview }: Props) => {
  return (
    <>
      <Modal
        isCentered
        onClose={() => {}}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={'1rem'}
        >
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
            mt={'2rem'}
          >
            <Image
              src={BadgePNG}
              alt="result"
              h={'7rem'}
              w={'7rem'}
              mb={'2rem'}
            />

            <Text fontSize={['medium', 'medium', 'large']} fontWeight={'700'}>
              Congratualtions!
            </Text>
            <Text fontSize={['small', 'small', 'medium']}>
              {`You scored ${score}%.`}
            </Text>
          </Flex>
          <Flex
            justifyContent={'space-around'}
            w="100%"
            mt={'1rem'}
            mb={'2rem'}
          >
            <Button
              variant="ghost"
              fontSize={['small', 'small', 'medium']}
              fontWeight="extrabold"
              onClick={() => onReview()}
            >
              Review Quiz
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}

export { ResultModal }

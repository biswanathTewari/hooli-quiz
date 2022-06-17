import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react'

import { PrimaryButton } from '../Buttons'
import { SubmitPNG } from '../../assets/images'

interface Props {
  submitHandler: Function
  onYes: Function
}

const SubmitModal = ({ submitHandler, onYes }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onBtnClick = () => {
    submitHandler()
    onOpen()
  }
  return (
    <>
      <PrimaryButton text="Submit" onClick={onBtnClick} fontSize="md" />
      <Modal
        isCentered
        onClose={onClose}
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
            marginY={'2rem'}
          >
            <Image
              src={SubmitPNG}
              alt="submit"
              h={'8rem'}
              w={'8rem'}
              mb={'1rem'}
            />

            <Text fontSize={['medium', 'medium', 'large']}>
              Are you sure you want to submit?
            </Text>
          </Flex>
          <Flex
            justifyContent={'space-around'}
            w="100%"
            mt={'1rem'}
            mb={'3rem'}
          >
            <Button
              colorScheme="blue"
              fontSize={['x-small', 'x-small', 'small']}
              mr={3}
              onClick={onClose}
            >
              No
            </Button>
            <Button
              colorScheme="blue"
              fontSize={['x-small', 'x-small', 'small']}
              mr={3}
              onClick={() => {
                onYes()
                onClose()
              }}
            >
              Yes
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}

export { SubmitModal }

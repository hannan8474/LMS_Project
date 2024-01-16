import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const StudentSocieties = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <div>StudentSocieties</div>
      
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facere totam molestiae! Atque nobis aspernatur necessitatibus eos voluptatem hic dolore.</p>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      
    </>
  )
}

export default StudentSocieties
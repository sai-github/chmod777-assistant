import React from 'react'
import {
  Box,
  ChakraProvider,
  Circle,
  Fade,
  useDisclosure,
  Stack,
  Text,
  Flex
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'

import styles from './styles.module.css'

export const ChmodChatComponent = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <ChakraProvider>
      <Circle className={styles.chatIcon} onClick={onToggle}>
        <ChatIcon />
      </Circle>
      <Fade in={isOpen}>
        <Flex
          position='fixed'
          bottom={24}
          width='320px'
          height='490px'
          right={8}
          rounded='md'
          shadow='md'
          direction='column'
          justifyContent='space-between'
          zIndex='2147483000'
        >
          <Stack direction='column' backgroundColor='teal.500' spacing={2}>
            <Text>Your App name</Text>
            <Text>Hi there</Text>
            <Text>Add tagline</Text>
          </Stack>
          <Stack direction='column' spacing={2}>
            <Box boxShadow='sm' p='6' rounded='md' bg='white'>
              sm
            </Box>
            <Box boxShadow='sm' p='6' rounded='md' bg='white'>
              sm
            </Box>
            <Box boxShadow='sm' p='6' rounded='md' bg='white'>
              sm
            </Box>
          </Stack>
          <Box position='sticky' bottom={0}>
            Powered by chmod777
          </Box>
        </Flex>
      </Fade>
    </ChakraProvider>
  )
}

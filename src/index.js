import React, { useState } from 'react'
import axios from 'axios'

import {
  ChakraProvider,
  Circle,
  Fade,
  useDisclosure,
  Stack,
  Text,
  Flex,
  Heading
} from '@chakra-ui/react'
import { ChatIcon, CloseIcon } from '@chakra-ui/icons'

import styles from './styles.module.css'
import Landing from './components/Landing/Landing'
import RealtimeChatbox from './components/RealtimeChatBox/RealtimeChatbox'

import { routes } from './constants'

export const ChmodChatComponent = ({ chatProps }) => {
  axios.defaults.baseURL = process.env.REACT_APP_CHMOD
  // eslint-disable-next-line dot-notation
  axios.defaults.headers.common['Authorization'] = chatProps.sessionToken

  const [activeRoute, setActiveRoute] = useState(routes.LANDING)
  const { isOpen, onToggle } = useDisclosure()

  const onBack = () => {
    setActiveRoute(routes.LANDING)
  }

  const onNavigate = (route) => {
    setActiveRoute(route)
  }

  return (
    <ChakraProvider>
      <Circle className={styles.chatIcon} onClick={onToggle}>
        {!isOpen ? <ChatIcon color='white' /> : <CloseIcon color='white' />}
      </Circle>
      {isOpen && (
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
            bgColor='white'
            zIndex='2147483000'
          >
            <Stack
              direction='column'
              backgroundColor='teal.500'
              spacing={2}
              background='linear-gradient(135deg, hsla(179, 58%, 52%, 1) 0%, hsla(179, 51%, 39%, 1) 100%)'
              padding={6}
            >
              <Heading as='h4' size='md' color='white'>
                {chatProps.appName} Assistant
              </Heading>
              <Text fontSize='xl' color='white'>
                Hi 👋
              </Text>
              <Text color='white' fontSize='xs'>
                We help you grow your business
              </Text>
            </Stack>

            {activeRoute === routes.LANDING && (
              <Landing onNavigate={onNavigate} />
            )}

            {activeRoute === routes.LIVE_CHAT && (
              <RealtimeChatbox onBack={onBack} />
            )}

            <Flex position='sticky' bottom={0} justifyContent='center'>
              <span className={styles.chatFooter}>
                Powered by <b>chmod777</b>
              </span>
            </Flex>
          </Flex>
        </Fade>
      )}
    </ChakraProvider>
  )
}

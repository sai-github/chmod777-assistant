import React from 'react'

import { Box, Stack, Text, AvatarGroup, Avatar, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import { routes } from '../../constants'

const RealtimeChat = (props) => {
  return (
    <Box
      boxShadow='md'
      p='6'
      rounded='md'
      bg='white'
      borderTop='2px solid'
      borderColor='teal.500'
    >
      <Text fontSize='sm' fontWeight='medium'>
        Start a conversation with us
      </Text>
      <Stack spacing={4} direction='row' mt={2}>
        <AvatarGroup size='sm' max={2}>
          <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        </AvatarGroup>

        <Text fontSize='xs' maxW='120px'>
          Our usual reply time is <b>a few minutes</b>
        </Text>
      </Stack>

      <Button
        rightIcon={<ArrowForwardIcon />}
        variant='solid'
        mt={4}
        size='sm'
        colorScheme='teal'
        onClick={() => props.onNavigate(routes.LIVE_CHAT)}
      >
        Start Chat
      </Button>
    </Box>
  )
}

export default RealtimeChat

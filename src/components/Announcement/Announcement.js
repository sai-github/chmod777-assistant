import React from 'react'
import { Box, Stack, Text, Heading } from '@chakra-ui/react'

const Announcement = () => {
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
        Announcements
      </Text>
      <Stack spacing={4} mt={4}>
        <Box p={5} borderWidth='1px' borderRadius={4}>
          <Heading fontSize='md'>Title 1</Heading>
          <Text mt={4}>dasdas dasd asd da dsada</Text>
        </Box>
        <Box p={5} borderWidth='1px' borderRadius={4}>
          <Heading fontSize='md'>Title 2</Heading>
          <Text mt={4}> dasdad asdadas dasdadad </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default Announcement

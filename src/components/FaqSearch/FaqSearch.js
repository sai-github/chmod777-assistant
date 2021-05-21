import React from 'react'
import {
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  IconButton
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const FaqSearch = () => {
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
        Find your answers
      </Text>

      <InputGroup size='sm' mt={4}>
        <Input pr='4.5rem' type='text' placeholder='Start typing' />
        <InputRightElement>
          <IconButton size='xs' icon={<SearchIcon />} />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default FaqSearch

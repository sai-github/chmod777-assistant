import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  useToast,
  Stack
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const FaqSearch = () => {
  const toast = useToast()
  const [searchKey, setSearckKey] = useState([])
  const [faq, setFaq] = useState([])
  const [filteredFaq, setFilteredFaq] = useState([])

  useEffect(() => {
    axios
      .get('/api/faq')
      .then((res) => {
        setFaq(res.data.data)
      })
      .catch((e) => console.error(e))
  }, [])

  const onSearch = () => {
    const ans = faq.filter((item) => {
      if (
        (item.question.includes(searchKey) ||
          item.answer.includes(searchKey) ||
          item.category.includes(searchKey)) &&
        item.isActiveFaq
      ) {
        return true
      }

      return false
    })
    setFilteredFaq(ans)

    if (!ans.length) {
      toast({
        title: 'No results found',
        status: 'info',
        duration: 5000
      })
    }
  }

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
        <Input
          pr='4.5rem'
          type='text'
          placeholder='Start typing'
          onChange={(e) => setSearckKey(e)}
        />
        <InputRightElement>
          <IconButton size='xs' icon={<SearchIcon />} onClick={onSearch} />
        </InputRightElement>
      </InputGroup>
      {filteredFaq.length > 0 &&
        filteredFaq.map((i) => (
          <Stack key={i._id} spacing={2} mt={4}>
            <Text fontSize='sm'>Q: {i.question}</Text>
            <Text fontSize='sm' fontWeight='light'>
              A: {i.answer}
            </Text>
          </Stack>
        ))}
    </Box>
  )
}

export default FaqSearch

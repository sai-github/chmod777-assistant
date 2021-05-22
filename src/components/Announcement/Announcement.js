import React, { useEffect, useState } from 'react'
import { Box, Stack, Text, Heading, Badge } from '@chakra-ui/react'
import axios from 'axios'

const Announcement = () => {
  const [anno, setAnno] = useState([])

  useEffect(() => {
    axios
      .get('api/announcement')
      .then((res) => {
        setAnno(
          res.data.data.sort(function (a, b) {
            return (
              new Date(b.activeTill).getDay() - new Date(a.activeTill).getDay()
            )
          })
        )
      })
      .catch((e) => console.error(e))
  }, [])

  const checkNew = (item) => {
    return new Date(item).getDay() >= new Date().getDay()
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
        Announcements
      </Text>
      <Stack spacing={4} mt={4}>
        {anno.length &&
          anno.map((i) => (
            <Box key={i._id} p={5} borderWidth='1px' borderRadius={4}>
              <Stack direction='row'>
                <Heading fontSize='sm'>{i.title}</Heading>
                {checkNew(i.activeTill) && (
                  <Badge size='xs' colorScheme='green'>
                    NEW
                  </Badge>
                )}
              </Stack>

              <Text fontSize='sm' mt={4}>
                {i.message}
              </Text>
            </Box>
          ))}
      </Stack>
    </Box>
  )
}

export default Announcement

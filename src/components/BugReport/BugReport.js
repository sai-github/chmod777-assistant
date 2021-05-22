import React, { useState } from 'react'
import html2canvas from 'html2canvas'
import axios from 'axios'

import {
  Box,
  Stack,
  Text,
  Button,
  Input,
  FormLabel,
  Textarea,
  useToast
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import styles from '../../styles.module.css'

const BugReport = () => {
  const toast = useToast()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const reportBug = () => {
    setSubmitting(true)

    const screenshotTarget = document.body

    html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL('image/jpeg', 0.5)

      axios
        .post('/api/bug/savebug', {
          title: title,
          description: desc,
          imageUrl: base64image,
          priority: 'high',
          isActiveBug: true
        })
        .then((res) => {
          setSubmitting(false)
          setTitle('')
          setDesc('')
          toast({
            title: 'Success',
            description: res.data.message,
            status: 'success',
            duration: 5000,
            isClosable: true
          })
        })
        .catch((e) => {
          setSubmitting(false)
          toast({
            title: 'Error',
            description: e.response.data.message,
            status: 'error',
            duration: 5000,
            isClosable: true
          })
        })
    })
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
        Report Bug
      </Text>
      <Stack spacing={4} mt={4}>
        <Box>
          <FormLabel htmlFor='title' fontSize='sm'>
            Title
          </FormLabel>
          <Input
            size='sm'
            id='title'
            name='title'
            type='text'
            placeholder='Enter title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className={styles.errors}>
            {/* adding dummy value */}
            {!title ? <div>Required</div> : null}
          </span>
        </Box>
        <Box>
          <FormLabel htmlFor='bugDesc' fontSize='sm'>
            Description
          </FormLabel>

          <Textarea
            id='bugDesc'
            name='bugDesc'
            type='text'
            placeholder='Describe your situation'
            onChange={(e) => setDesc(e.target.value)}
          />

          <span className={styles.errors}>
            {/* adding dummy value */}
            {!desc ? <div>Required</div> : null}
          </span>
        </Box>

        <Button
          rightIcon={<ArrowForwardIcon />}
          variant='solid'
          mt={4}
          size='sm'
          colorScheme='teal'
          onClick={reportBug}
          isLoading={submitting}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  )
}

export default BugReport

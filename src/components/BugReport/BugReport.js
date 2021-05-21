import React from 'react'
import {
  Box,
  Stack,
  Text,
  Button,
  Input,
  FormLabel,
  Textarea
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import styles from '../../styles.module.css'

const BugReport = () => {
  const temp = 1
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
          <FormLabel htmlFor='email' fontSize='sm'>
            Email
          </FormLabel>
          <Input
            size='sm'
            id='email'
            name='email'
            type='text'
            placeholder='Enter email'
          />
          <span className={styles.errors}>
            {/* adding dummy value */}
            {temp === 1 ? <div>Required</div> : null}
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
            placeholder='Type answer'
          />

          <span className={styles.errors}>
            {/* adding dummy value */}
            {temp === 1 ? <div>Required</div> : null}
          </span>
        </Box>

        <Button
          rightIcon={<ArrowForwardIcon />}
          variant='solid'
          mt={4}
          size='sm'
          colorScheme='teal'
        >
          Submit
        </Button>
      </Stack>
    </Box>
  )
}

export default BugReport

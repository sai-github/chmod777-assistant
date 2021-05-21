import React from 'react'

import { Stack } from '@chakra-ui/react'

import RealtimeChat from '../RealtimeChat/RealtimeChat'
import FaqSearch from '../FaqSearch/FaqSearch'
import Announcement from '../Announcement/Announcement'
import BugReport from '../BugReport/BugReport'

import styles from '../../styles.module.css'

const Landing = (props) => {
  // const onNavigate = (value) => {
  //   props.onNavigate(value)
  // }

  return (
    <Stack
      direction='column'
      spacing={4}
      p={6}
      overflow='auto'
      className={styles.scrollStyles}
    >
      <RealtimeChat onNavigate={props.onNavigate} />

      <FaqSearch />

      <Announcement />

      <BugReport />
    </Stack>
  )
}

export default Landing

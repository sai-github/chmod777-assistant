import { Button } from '@chakra-ui/react'
import React from 'react'

const RealtimeChatbox = (props) => {
  return (
    <div>
      <Button onClick={props.onBack}>Back</Button>
      <div>Realtime chatbox placeholder</div>
    </div>
  )
}

export default RealtimeChatbox

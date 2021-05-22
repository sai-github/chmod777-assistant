import React from 'react'

import { ChmodChatComponent } from 'chmod777-assistant'
import 'chmod777-assistant/dist/index.css'

const App = () => {
  const chatProps = {
    appName: 'Dummy',
    sessionToken: process.env.REACT_APP_SESSION_TOKEN,
    botToken: process.env.REACT_APP_BOT_TOKEN
  }

  return (
    <div style={{ height: '100vh', backgroundColor: 'burlywood' }}>
      <ChmodChatComponent chatProps={chatProps} />
    </div>
  )
}

export default App

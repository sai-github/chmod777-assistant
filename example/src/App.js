import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'

import { ChmodChatComponent } from 'chmod777-assistant'
import 'chmod777-assistant/dist/index.css'

const App = () => {
  const chatProps = {
    appName: 'Dummy'
  }

  return (
    <Router>
      <div style={{ height: '100vh', backgroundColor: 'burlywood' }}>
        <b>Navigation:</b>
        <nav>
          <ul>
            <li>
              <Link to='/' style={{ textDecoration: 'underline' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' style={{ textDecoration: 'underline' }}>
                About
              </Link>
            </li>
            <li>
              <Link to='/users' style={{ textDecoration: 'underline' }}>
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <span>Current Tab"</span>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <ChmodChatComponent chatProps={chatProps} />
      </div>
    </Router>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import '@atlaskit/css-reset';
import styled from 'styled-components'

// API
// import api from './api'

const MessageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = ({socket, sendMessageToHost}) => {

  const [message, setMessage] = useState()

  socket.onmessage = function (event) {
    const data = JSON.parse(event.data)
    const message = data.message
    const totalOfClients = data.totalOfClients

    console.log(message, totalOfClients, "clients.");
    setMessage(message)
  }

  return (
    <React.Fragment>
      <MessageWrapper>
        <h1>{message}</h1>
      </MessageWrapper>
    </React.Fragment>
  )
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create WebSocket connection.
const socket = new WebSocket('ws://localhost/websocket');

// Connection opened
socket.addEventListener('open', function (event) {
  socket.send(JSON.stringify({ message: "Hi, host!" }))
});

const sendMessageToHost = (message) => {
  socket.send(JSON.stringify({ message: message }))
}

ReactDOM.render(
  <React.StrictMode>
    <App socket={socket} sendMessageToHost={sendMessageToHost}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

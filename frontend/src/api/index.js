// Create WebSocket connection.
const socket = new WebSocket('ws://localhost/websocket');

// Connection opened
socket.addEventListener('open', function (event) {
  console.log('Connection oppened');
  // socket.send(JSON.stringify({ state: { initialData: initialData } }))
});
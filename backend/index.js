// Websocket
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8090 });

var clients = new Set();

wss.on('connection', function connection(ws) {
    clients.add(ws);
    console.log('Client connected! Total of ', clients.size, ' clients.');

    ws.on('message', function (payload) {
        // Parse message
        const message = JSON.parse(payload).message
        
        // Broadcast message
        for (let client of clients) {
            client.send(JSON.stringify({ message: message, totalOfClients: clients.size }));
        }
        
        console.log('Message: "', message, '" sent to"', clients.size, '"clients.');
    })

    ws.on('close', function () {
        // Delete closed connections
        clients.delete(ws)
    })
});
# docker-nginx-websocket
Dockerized Websocket behind Nginx solution

Run

```
docker-compose up -d --build
```

Change 'localhost' in ```index.js:7``` to your 'domain.com'

```javascript
const socket = new WebSocket('ws://domain.com/websocket');
```

/* eslint-env node */
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log('클라이언트 연결됨');

  ws.on('message', (data) => {
    const msg = data.toString();
    console.log('받은 프레임:\n', msg);

    if (msg.startsWith('CONNECT')) {
      ws.send('CONNECTED\nversion:1.2\n\n\x00');
      console.log('CONNECTED 전송');
    }

    if (msg.startsWith('SUBSCRIBE')) {
      const idMatch = msg.match(/^id:(.+)$/m);
      const destMatch = msg.match(/^destination:(.+)$/m);
      const subscriptionId = idMatch ? idMatch[1].trim() : 'sub-0';
      const destination = destMatch ? destMatch[1].trim() : null;

      if (!ws.subscriptions) {
        ws.subscriptions = new Map();
      }

      if (destination) {
        ws.subscriptions.set(destination, subscriptionId);
      }
    }

    if (msg.startsWith('SEND')) {
      const destMatch = msg.match(/^destination:(.+)$/m);
      const sendDestination = destMatch ? destMatch[1].trim() : '';
      const teamMatch = sendDestination.match(/\/app\/chat\/(.+)$/);
      const teamId = teamMatch ? teamMatch[1] : null;
      const topicDestination = teamId
        ? `/topic/chat/${teamId}`
        : '/topic/chat/unknown';
      const body = msg.split('\n\n')[1]?.replace('\x00', '');

      clients.forEach((client) => {
        if (client.readyState !== WebSocket.OPEN) return;
        if (!client.subscriptions?.has(topicDestination)) return;

        const subscriptionId = client.subscriptions.get(topicDestination);
        const frame =
          'MESSAGE\n' +
          `subscription:${subscriptionId}\n` +
          `destination:${topicDestination}\n` +
          '\n' +
          body +
          '\x00';
        client.send(frame);
      });
    }
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log(`연결 끊김 (현재 ${clients.size}명)`);
  });
});

console.log('mock STOMP 서버 실행 중 → ws://localhost:8080');

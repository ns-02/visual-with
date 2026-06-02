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
      const match = msg.match(/^id:(.+)$/m);
      const subscriptionId = match ? match[1].trim() : 'sub-0';

      ws.subscriptionId = subscriptionId;

      setTimeout(() => {
        const frame =
          'MESSAGE\n' +
          'subscription:sub-0\n' +
          'destination:/topic/chat/1\n' +
          '\n' +
          JSON.stringify({ senderId: 'mock', content: '안녕하세요!' }) +
          '\x00';
        ws.send(frame);
        console.log('mock 메시지 전송');
      }, 1000);
    }

    if (msg.startsWith('SEND')) {
      const body = msg.split('\n\n')[1]?.replace('\x00', '');

      clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          const frame =
            'MESSAGE\n' +
            `subscription:${client.subscriptionId ?? 'sub-0'}\n` + // 각 클라이언트 ID 사용
            'destination:/topic/chat/1\n' +
            '\n' +
            body +
            '\x00';
          client.send(frame);
        }
      });
    }
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log(`연결 끊김 (현재 ${clients.size}명)`);
  });
});

console.log('mock STOMP 서버 실행 중 → ws://localhost:8080');

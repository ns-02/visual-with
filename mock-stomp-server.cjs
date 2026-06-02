/* eslint-env node */
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('클라이언트 연결됨');

  ws.on('message', (data) => {
    const msg = data.toString();
    console.log('받은 프레임:\n', msg);

    if (msg.startsWith('CONNECT')) {
      ws.send('CONNECTED\nversion:1.2\n\n\x00');
      console.log('CONNECTED 전송');
    }

    if (msg.startsWith('SUBSCRIBE')) {
      // 구독하면 1초 뒤 mock 메시지 전송
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
  });

  ws.on('close', () => console.log('연결 끊김'));
});

console.log('mock STOMP 서버 실행 중 → ws://localhost:8080');

// src/mocks/handlers.ts
import { ws } from 'msw';

const chatLink = ws.link('ws://localhost:5173/ws-stomp/*');

export const handlers = [
  chatLink.addEventListener('connection', ({ client }) => {
    client.addEventListener('message', (event) => {
      const messageData = event.data as string;

      if (messageData.startsWith('CONNECT')) {
        client.send('CONNECTED\nversion:1.1\nheart-beat:0,0\n\n\u0000');
      }

      if (messageData.startsWith('SUBSCRIBE')) {
        const destinationMatch = messageData.match(/destination:(.+)/);
        const destination = destinationMatch ? destinationMatch[1] : '';

        setTimeout(() => {
          const mockMessage = {
            id: Date.now(),
            sender: '시스템',
            content: '가짜 백엔드 서버에 연결되었습니다.',
            timestamp: new Date().toISOString(),
          };

          const stompFrame = `MESSAGE\ndestination:${destination}\nsubscription:sub-0\nmessage-id:${Date.now()}\ncontent-type:application/json\n\n${JSON.stringify(mockMessage)}\u0000`;

          client.send(stompFrame);
        }, 1000);
      }

      if (messageData.startsWith('SEND')) {
        const bodyStart = messageData.indexOf('\n\n') + 2;
        const bodyEnd = messageData.lastIndexOf('\u0000');
        const bodyString = messageData.substring(bodyStart, bodyEnd);

        try {
          const parsedBody = JSON.parse(bodyString);
          const destinationMatch = messageData.match(/destination:(.+)/);
          const destination = destinationMatch ? destinationMatch[1] : '';

          const echoMessage = {
            id: Date.now(),
            sender: parsedBody.sender || '나',
            content: parsedBody.content,
            timestamp: new Date().toISOString(),
          };

          const stompFrame = `MESSAGE\ndestination:${destination}\nsubscription:sub-0\nmessage-id:${Date.now()}\ncontent-type:application/json\n\n${JSON.stringify(echoMessage)}\u0000`;

          client.send(stompFrame);
        } catch (e) {
          console.error(e);
          return;
        }
      }
    });
  }),
];

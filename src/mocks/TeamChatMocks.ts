import { ChatItem } from '@shared/models/Chat';

export const GANADA_TEAM_ID = 'f5l8q0h4';

export type TeamChatMockFactory = (params: {
  userId: string | null;
  userName: string | null;
}) => ChatItem[];

export const teamChatMockFactories: Record<string, TeamChatMockFactory> = {
  [GANADA_TEAM_ID]: ({ userId, userName }) => {
    const meId = userId ?? 'me';
    const meName = userName ?? '나';

    return [
      {
        id: 1,
        authorId: 'lead_01',
        authorName: '민지(팀장)',
        chat: '가나다팀 채팅방 목업이에요. 편하게 테스트해 주세요!',
        time: '오전 9:10',
        createdAt: '2026-03-18',
        isMe: false,
      },
      {
        id: 2,
        authorId: 'dev_02',
        authorName: '준호',
        chat: '오늘 목표는 팀 채팅 UX 개선이죠? 메시지 정렬부터 볼게요.',
        time: '오전 9:11',
        createdAt: '2026-03-18',
        isMe: false,
      },
      {
        id: 3,
        authorId: meId,
        authorName: meName,
        chat: '네! 저는 isMe 계산 로직부터 정리해볼게요.',
        time: '오전 9:12',
        createdAt: '2026-03-18',
        isMe: true,
      },
      {
        id: 4,
        authorId: 'design_03',
        authorName: '수아(디자인)',
        chat: '말풍선 간격이랑 아바타 위치도 같이 확인 부탁드려요.',
        time: '오전 9:14',
        createdAt: '2026-03-19',
        isMe: false,
      },
      {
        id: 5,
        authorId: 'dev_02',
        authorName: '준호',
        chat: '오케이. 그리고 날짜 구분선도 나중에 넣으면 좋을 듯!',
        time: '오전 9:15',
        createdAt: '2026-03-19',
        isMe: false,
      },
    ];
  },
};

import { ChatData } from '@shared/models/Workspace';

export const GANADA_TEAM_ID = 'f5l8q0h4';
export const RAMA_TEAM_ID = 'b2y1m7j6';
export const SAJA_TEAM_ID = 'c3h7p9m2';

export type TeamChatMockFactory = (params: {
  userId: string | undefined;
  userName: string | undefined;
}) => ChatData[];

export const teamChatMockFactories: Record<string, TeamChatMockFactory> = {
  [GANADA_TEAM_ID]: ({ userId, userName }) => {
    const meId = userId ?? 'me';
    const meName = userName ?? '나';

    return [
      {
        id: 1,
        authorId: 'lead_01',
        authorName: '민지',
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
        authorName: '수아',
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
  [RAMA_TEAM_ID]: ({ userId, userName }) => {
    const meId = userId ?? 'me';
    const meName = userName ?? '나';

    return [
      {
        id: 1,
        authorId: 'rama_lead',
        authorName: '서준',
        chat: '라마바팀 채팅입니다. 스프린트 보드 링크 올려둘게요.',
        time: '오전 10:02',
        createdAt: '2026-03-20',
        isMe: false,
      },
      {
        id: 2,
        authorId: meId,
        authorName: meName,
        chat: '배포 일정만 확정되면 바로 공유할게요.',
        time: '오전 10:05',
        createdAt: '2026-03-20',
        isMe: true,
      },
      {
        id: 3,
        authorId: 'rama_qa',
        authorName: '지우',
        chat: '스테이징에서 회귀 테스트 한 번 더 돌려볼게요.',
        time: '오전 10:18',
        createdAt: '2026-03-20',
        isMe: false,
      },
    ];
  },
  [SAJA_TEAM_ID]: ({ userId, userName }) => {
    const meId = userId ?? 'me';
    const meName = userName ?? '나';

    return [
      {
        id: 1,
        authorId: 'co_lead_01',
        authorName: '하린',
        chat: '사아자팀입니다. 공동 리더 체크인부터 할까요?',
        time: '오후 1:00',
        createdAt: '2026-03-21',
        isMe: false,
      },
      {
        id: 2,
        authorId: 'co_lead_02',
        authorName: '도윤',
        chat: '분기 목표 초안 공유드렸어요. 코멘트 부탁해요.',
        time: '오후 1:03',
        createdAt: '2026-03-21',
        isMe: false,
      },
      {
        id: 3,
        authorId: meId,
        authorName: meName,
        chat: '확인했어요. 금요일 미팅 전까지 피드백 넣을게요.',
        time: '오후 1:08',
        createdAt: '2026-03-21',
        isMe: true,
      },
      {
        id: 4,
        authorId: 'co_lead_01',
        authorName: '하린',
        chat: '좋아요. 일정·할 일 탭도 팀별로 잘 나뉘는지 같이 봐요.',
        time: '오후 1:10',
        createdAt: '2026-03-21',
        isMe: false,
      },
    ];
  },
};

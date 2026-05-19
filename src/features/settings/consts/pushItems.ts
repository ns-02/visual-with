export const PUSH_ITEMS = [
  { key: 'teamChat', label: '팀 채팅 알림', defaultEnabled: true },
  { key: 'directChat', label: '친구 채팅 알림', defaultEnabled: true },
  { key: 'fileShare', label: '파일 공유 알림', defaultEnabled: true },
  { key: 'todo', label: '할 일 목록 알림', defaultEnabled: false },
  { key: 'calendarCreated', label: '일정 등록 알림', defaultEnabled: true },
  { key: 'calendarReminder', label: '남은 일정 알림', defaultEnabled: true },
  { key: 'teamInvite', label: '팀 초대 알림', defaultEnabled: true },
  { key: 'friendRequest', label: '친구 요청 알림', defaultEnabled: true },
] as const;

export type PushKey = (typeof PUSH_ITEMS)[number]['key'];

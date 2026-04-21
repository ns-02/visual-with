import { FriendData } from '@shared/models/Friend';

export const friendDataMocks: FriendData[] = [
  { id: 'kcs_0707', name: '김철수', description: '프론트엔드 개발자' },
  { id: 'yheelee', name: '이영희', description: 'UX 디자이너' },
  { id: 'real_youngsu', name: '박영수', description: '백엔드 개발자' },
];

export const friendRequestDataMocks: FriendData[] = [
  { id: 'sujinj', name: '정수진', description: '소프트웨어 아키텍트' },
  { id: 'minhok97', name: '강민호', description: '보안 엔지니어' },
];

export const notFriendDataMocks: FriendData[] = [
  { id: 'sky_choi', name: '최하늘', description: '풀스택 개발자' },
  { id: 'shyeon_tech', name: '한서현', description: 'QA 엔지니어' },
  { id: 'jimin_yoon', name: '윤지민', description: '데이터 분석가' },
];

// 미래에 요청을 보낼 예정
export const futureRequestDataMocks: FriendData[] = [
  { id: 'kwonth_pm', name: '권태희', description: '프로젝트 매니저' },
];

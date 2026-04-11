import { TodoData } from '@features/todoList/models/Todo';

export const todoDataMocks: TodoData[] = [
  {
    id: 1,
    title: '프로젝트 기획안 작성',
    description: '클라이언트 미팅 준비',
    checked: false,
    teamId: 'f5l8q0h4',
  },
  {
    id: 2,
    title: '디자인 시안 검토',
    description: '팀원들과 피드백 공유',
    checked: false,
    teamId: 'f5l8q0h4',
  },
  {
    id: 3,
    title: '코드 리뷰 진행',
    description: 'PR 3건 확인 필요',
    checked: false,
    teamId: 'f5l8q0h4',
  },
  {
    id: 4,
    title: '라마바 배포 체크리스트',
    description: '스테이징 검증',
    checked: false,
    teamId: 'b2y1m7j6',
  },
  {
    id: 5,
    title: '라마바 문서 보강',
    description: 'API 명세 업데이트',
    checked: true,
    teamId: 'b2y1m7j6',
  },
  {
    id: 6,
    title: '라마바 이슈 트리아지',
    description: '백로그 정리',
    checked: false,
    teamId: 'b2y1m7j6',
  },
  {
    id: 7,
    title: '사아자 온보딩 자료',
    description: '신규 팀원용',
    checked: false,
    teamId: 'c3h7p9m2',
  },
  {
    id: 8,
    title: '공동 리더 역할 분담표',
    description: 'SUB_ADMIN 워크플로',
    checked: true,
    teamId: 'c3h7p9m2',
  },
  {
    id: 9,
    title: '사아자 주간 공유',
    description: '금요일 스탠드업 준비',
    checked: false,
    teamId: 'c3h7p9m2',
  },
];

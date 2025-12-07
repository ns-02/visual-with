import { TodoData } from '@models/Todo';

export const todoDataMocks: TodoData[] = [
  {
    id: 1,
    title: '프로젝트 기획안 작성',
    description: '클라이언트 미팅 준비',
    checked: false,
  },
  {
    id: 2,
    title: '디자인 시안 검토',
    description: '팀원들과 피드백 공유',
    checked: false,
  },
  {
    id: 3,
    title: '코드 리뷰 진행',
    description: 'PR 3건 확인 필요',
    checked: false,
  },
  {
    id: 4,
    title: '업무 진척도 검토',
    description: '한 주간 핵심 지표 점검',
    checked: true,
  },
  {
    id: 5,
    title: '프로젝트 회의록',
    description: '팀의 회의 내용 및 아이템 관리',
    checked: true,
  },
];

# DevLog & TODO
프로젝트의 개발 내역과 할 일을 기록하는 문서

## 구현 규칙
- 요구사항 변경이 가장 적은 컴포넌트를 우선으로 구현할 것.

## 명명 규칙
- on[EventName]: 단순히 콜백 함수를 전달
- handle[EventName]: 콜백이 실행할 실제 로직

## 설계
- 팀 초대받는 화면 설계

## 방향성
- 백엔드 연계: 토큰 관리
- 구조 및 디자인: 초대받은 화면 -> 팀 설정 다이얼로그
- 데이터 및 로직: 팀 변경 로직 -> 역할별 권한 설정 로직

## 세부 목표
- 로그인 후 토큰 관리하는 로직 추가하기
- 메인 페이지의 루트 경로에 대한 컴포넌트 작성
- 아이디 중복 확인, 회원가입, 로그인 시 예외 처리 로직 및 발생 가능한 오류 찾기
- 로그인 후, 시작 페이지에서 시작하기 및 로그아웃 버튼을 제공. 시작하기 버튼을 누르면 바로 Main 페이지로 넘어감
- 로그인, 회원가입, 회원가입 완료 페이지의 컴포넌트 디자인

## 수정 및 개선사항
- AuthContext.tsx에 login/logout, isLoading 함수 추가 고려
- 친구 미선택 시 채팅 입력 방지 & 미선택 상태일 때 컴포넌트 렌더링 정의
- HeaderBar의 현재 상태는 input의 값이 바뀌지 않음. input 로직 변경하면서 그렇게 됨.
- 채팅 형식을 DB에 맞게 변경
- 포커스가 채팅의 하단부을 가리키도록 변경
- 개인 채팅의 오버플로우 현상 변경
- 로그인 및 회원가입 로직을 커스텀 훅으로 분리 (AI 추천) -> hooks 폴더
- ChatView.tsx에 데이터와 로직을 보내줄, (features)View를 만들어서 각 features에 저장
- api 폴더의 분리 및 모듈화: api 폴더 내부를 기능(Domain)별로 분리

## 고려사항
- RightSection.tsx, MainBody.tsx는 필요에 의해 별도의 파일로 분리했지만 (코드의 재사용 방지, css의 명확성) 아직까진 하는 역할이 컨테이너 뿐이라서 아쉬움.

## 예정 목표
- (피드백) 할 일 목록 개선: 제목만 표시 or 노션처럼 2분할
- (피드백) '개' 부분(드롭다운의 트리거 버튼) 호버링 구현
- (피드백) 파일 공유 화면: '파일 공유' 라벨 오른쪽에 파일의 만료일 팝업 표시
- src(루트)에 공용 hooks/, utils/, 각 features에 전용 hooks/, utils/를 두어 관리
- 유닛 테스트 (Jest + React Testing Library) 추가 고려
- store/도 루트에 필요하다면 두고 관리
- 전역 색상 스타일 적용
- 다크 모드 적용
- 호버링 등 요소별 UI 반응 구현

## 추천 라이브러리
- Zustand (전역 컨텍스트)
- TanStack Query (비동기 데이터 관리)
- socket.io-client (실시간 웹 통신)
- Lodash (유틸리티 함수 묶음)
- Jest (단위 테스트) (도입을 100번 정도 고려해볼 것)
- React Testing Library (React 컴포넌트 테스트) (도입을 100번 정도 고려해볼 것)
- Recharts (데이터 시각화 - 차트)

## 다음 프로젝트 시
- Tailwind CSS + clsx 적용

## 참고 링크
- storybook: https://storybook.js.org/
- lucide-react: https://lucide.dev/icons/plus
- radix-ui: https://www.radix-ui.com/
- **React DayPicker**: https://daypicker.dev/
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
- 팀 채팅의 FileUploadDropdown에서 파일공유의 store, ui를 직접 꺼내 쓰는 문제
- 개인 채팅에 별도로 파일을 업로드할 방안을 마련해야 함
- AuthContext.tsx에 login/logout, isLoading 함수 추가 고려
- 친구 미선택 시 채팅 입력 방지 & 미선택 상태일 때 컴포넌트 렌더링 정의
- HeaderBar의 현재 상태는 input의 값이 바뀌지 않음. input 로직 변경하면서 그렇게 됨.
- 채팅 형식을 DB에 맞게 변경
- 포커스가 채팅의 하단부을 가리키도록 변경
- 개인 채팅의 오버플로우 현상 변경
- 로그인 및 회원가입 로직을 커스텀 훅으로 분리 (AI 추천) -> hooks 폴더
- ChatView.tsx에 데이터와 로직을 보내줄, (features)View를 만들어서 각 features에 저장
- api 폴더의 분리 및 모듈화: api 폴더 내부를 기능(Domain)별로 분리

## AI 추천 보완 및 개선사항
https://gemini.google.com/share/29701a9a7438

### 우선순위 높음 (당장 해야 하는 것)
- deleteFriend는 현재 선택된 친구나 friendIdChatMap 해당 키를 비우지 않을 수 있어, DM 화면에서 유령 선택/미리보기가 남을 수 있음
- todoData 상태 개선: 렌더 시마다 계산 or selector로 분리 (TodoContents의 progressData/completedData를 state로 들고 있지 말고 파생 계산(또는 Zustand selector))
- 레이어 역할의 명확화: layouts / ui / dialogs / pages 책임 정의
- mocks와 실제 API 교체 전략 명시
- 라우팅의 경로 문자열을 한 곳에서 정의한 후 가져오기 (AppRoutes.tsx, routeMap.ts 문자열 중복)

### 우선순위 보통 (하면 좋은 것)
- 서버와 클라이언트 상태 분리 (TanStack Query)
- 화면 단위로 로딩/에러/빈 상태를 일관된 패턴으로 맞추기(공통 컴포넌트는 shared, 로직은 feature)
- 공통 패턴 추출: AddXxxDialog, UpdateXxxDialog, DeleteXxxDialog 패턴이 여러 feature에 반복 -> 공통 구조를 components/dialogs 쪽으로 추상화
- 컴포넌트 토큰/변수 정리: 버튼/인풋/다이얼로그 등 공용 컴포넌트 -> 색상, 공간, 폰트 사이즈를 Design Token(CSS 변수)로 관리
- 테스트 및 품질 자동화 (lint + typecheck + bulid: CI 스크립트 고정), 핵심 유틸과 훅만 유닛 테스트
- Route 정의와 Feature 의존성 최소화: features에서 라우트용 엔트리 컴포넌트만 받고, AppRoutes에서 조합

### 우선순위 낮음 (굳이 안 해도 되는 것)
- Repository 패턴 또는 서비스 레이어 도입
- API 응답 타입 vs 화면에서 쓰는 ViewModel이 섞여 있으면 변환 계층(Mapper) 을 feature 쪽에 두기
- 코드 스플리팅 고려(lazy): 기능이 많으므로 무거운 페이지는 React.lazy + Suspense로 나누어 초기 로딩 속도 개선
- 주요 feature 컴포넌트 중 일부 복잡한 UI를 Storybook에 등록
- 버튼/인풋/모달 등 공용 컴포넌트에 키보드 포커스, aria, disabled 상태 정리

### 완료된 것
- 도메인 Context 수 줄이기 (완료)
- Context + Reducer 패턴 통일 (완료)
- MessageList 책임 명확화 (완료)
- 도메인 전용 UI와 공용 UI 구분 (완료)

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
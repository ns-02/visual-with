# Visual With

다기능 협업 툴 Visual With의 프론트엔드 <br>
React와 TypeScript로 개발 중 <br>
사용자 친화적인 인터페이스 목표

## 시작 방법
```
npm install
npm run dev
```
http://localhost:5173

## 폴더
- [`src/` : 앱의 실제 코드](src/README.md)

## 설계
- 팀 초대받는 화면 설계

## 사용 중인 라이브러리 또는 툴
- Vite: 빌드 도구
- lucide-react: 아이콘 불러오기
- Storybook: 재사용되는 컴포넌트 관리 및 정리
- radix-ui: ui 제작 도구
- React Router: 리액트 환경에서 라우팅 제공
- css module: 지역 단위 css 적용
- React DayPicker: 날짜 선택 ui 지원

## 전체 기능
[바로 가기](docs/features.md)

## 구현 규칙
- 요구사항 변경이 가장 적은 컴포넌트를 우선으로 구현할 것.

## 명명 규칙
- on[EventName]: 단순히 콜백 함수를 전달
- handle[EventName]: 콜백이 실행할 실제 로직

## 방향성
- 백엔드 연계: 토큰 관리 -> 비허가 접근 관리
- 구조 및 디자인: 초대받은 화면 -> 팀 설정 다이얼로그
- 데이터 및 로직: 팀 변경 로직 -> 역할별 권한 설정 로직

## 세부 목표
- 로그인 후 토큰 관리하는 로직 추가하기
- 메인 페이지의 루트 경로에 대한 컴포넌트 작성
- 아이디 중복 확인, 회원가입, 로그인 시 예외 처리 로직 및 발생 가능한 오류 찾기
- 로그인 후, 시작 페이지에서 시작하기 및 로그아웃 버튼을 제공. 시작하기 버튼을 누르면 바로 Main 페이지로 넘어감
- 로그인, 회원가입, 회원가입 완료 페이지의 컴포넌트 디자인

## 수정 및 개선사항
- 채팅의 id 중복 문제
- 친구 미선택 시 채팅 입력 방지
- DirectChatPage.tsx 재랜더링 시 마지막 채팅 기록 사라짐 => 아마 컨텍스트로 옮겨서 해결해야할듯함
- input에 적용된 디바운스를 상위 컴포넌트가 관리하도록 역할 이전
- 채팅 형식을 DB에 맞게 변경
- 포커스가 채팅의 하단부을 가리키도록 변경
- 응답 데이터의 인터페이스 정의를 api 폴더 근처에 모아둘 것
- 로그인 및 회원가입 로직을 커스텀 훅으로 분리 (AI 추천) -> hooks 폴더
- 인증 상태를 관리하는 context/AuthContext.tsx 만들기
- 접근 권한 제어: RouteWatcher.tsx에 라우트 가드를 추가
- AuthContext에서 로그인 여부를 확인하고, 로그인이 안 되어 있다면 강제로 LoginPage로 리다이렉트
- ChatView.tsx에 데이터와 로직을 보내줄, (features)View를 만들어서 각 features에 저장
- api 폴더의 분리 및 모듈화: api 폴더 내부를 기능(Domain)별로 분리

## 고려사항
- RightSection.tsx, MainBody.tsx는 필요에 의해 별도의 파일로 분리했지만 (코드의 재사용 방지, css의 명확성) 아직까진 하는 역할이 컨테이너 뿐이라서 아쉬움.

## 예정 목표
- (피드백) 할 일 목록 개선: 제목만 표시 or 노션처럼 2분할
- (피드백) '개' 부분(드롭다운의 트리거 버튼) 호버링 구현
- (피드백) 파일 공유 화면: '파일 공유' 라벨 오른쪽에 파일의 만료일 팝업 표시
- src(루트)에 공용 hooks/, utils/, 각 features에 전용 hooks/, utils/를 두어 관리
- store/도 루트에 필요하다면 두고 관리
- 전역 색상 스타일 적용
- 다크 모드 적용
- 호버링 등 요소별 UI 반응 구현

## 다음 프로젝트 시
- Tailwind CSS + clsx 적용

## 참고 링크
- storybook: https://storybook.js.org/
- lucide-react: https://lucide.dev/icons/plus
- radix-ui: https://www.radix-ui.com/
- **React DayPicker**: https://daypicker.dev/
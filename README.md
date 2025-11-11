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

## 전체 기능
[바로 가기](docs/features.md)

## 방향성
- 백엔드 연계: 중복확인 로직 -> 회원가입, 로그인 로직 -> 토큰 관리
- 프론트 단독: 팀 변경 로직 -> 팀 생성 및 삭제 다이얼로그

## 세부 목표
- 로그인 후 토큰 관리하는 로직 추가하기
- 회원가입과 로그인의 전반적인 흐름이 백엔드와 잘 맞물리는지 확인하기
- 팀 변경 시 팀의 데이터, 페이지 별 출력 데이터 변경
- 메인 페이지의 루트 경로에 대한 컴포넌트 작성
- 팀 초대 모달을 게스트 초대와 일반 사용자 초대로 분리
- 로그인 후, 시작 페이지에서 시작하기 및 로그아웃 버튼을 제공. 시작하기 버튼을 누르면 바로 Main 페이지로 넘어감
- 로그인, 회원가입, 회원가입 완료 페이지의 컴포넌트 디자인

## 수정 및 개선사항
- input에 적용된 디바운스를 상위 컴포넌트가 관리하도록 역할 이전
- 채팅 형식을 DB에 맞게 변경
- 채팅 콘텐츠가 가로 스크롤이 되는 것 방지
- 포커스가 채팅의 하단부을 가리키도록 변경
- api를 주고받을 시, API 엔드포인트와 요청/응답 구조를 명확하게 문서화
- 응답 데이터의 인터페이스 정의를 api 폴더 근처에 모아둘 것
- 로그인 및 회원가입 로직을 커스텀 훅으로 분리 (AI 추천) -> hooks 폴더
- 인증 상태를 관리하는 context/AuthContext.tsx 만들기
- 접근 권한 제어: RouteWatcher.tsx에 라우트 가드를 추가
- AuthContext에서 로그인 여부를 확인하고, 로그인이 안 되어 있다면 강제로 LoginPage로 리다이렉트
- main/features에서, 해당 기능과 관련된 모든 타입 정의(인터페이스)를 (기능명)/types.ts에 기록
- ChatView.tsx에 데이터와 로직을 보내줄, ChatViewWrapper(예)를 만들어서 각 features에 저장

## 고려사항
- RightSection.tsx, MainBody.tsx는 필요에 의해 별도의 파일로 분리했지만 (코드의 재사용 방지, css의 명확성) 아직까진 하는 역할이 컨테이너 뿐이라서 아쉬움.

## 예정 목표
- (피드백) 할 일 목록 개선: 제목만 표시 or 노션처럼 2분할
- (피드백) 일정 관리 개선: 년 월 일 선택창 아래쪽 채우기
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
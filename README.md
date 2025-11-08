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
- 백엔드와 연계: 회원가입 로직 -> 토큰 관리
- 프론트 단독: 기능별 라우팅 -> 팀 선택 드롭다운 -> 팀 변경 로직 -> 팀 생성 및 삭제 다이얼로그

## 세부 목표
- 로그인 후 토큰 관리하는 로직 추가하기
- 회원가입과 로그인의 전반적인 흐름이 백엔드와 잘 맞물리는지 확인하기
- Button 내부 컴포넌트들에 리액트 라우터에서 사용하는 Link 적용
- LeftMenu의 type들을 각 컴포넌트에 통째로 넣는 방법 찾기
- 모달(다이얼로그) 구현
- 로그아웃 버튼을 눌렀을 때, 바로 시작 페이지로 넘어가는 것이 아니라 모달을 띄워서 질의하는 방식으로 변경
- 로그인 후, 시작 페이지에서 시작하기 및 로그아웃 버튼을 제공. 시작하기 버튼을 누르면 바로 Main 페이지로 넘어감
- 로그인, 회원가입, 회원가입 완료 페이지의 컴포넌트 디자인

## 수정 및 개선사항
- StartPage를 HomePage로 변경
- pages 내부의 시작 페이지를 제외한 나머지 파일을 별도 폴더로 분리
- 시작 페이지와 메인 페이지를 제외한 나머지 페이지의 css 통합 혹은 삭제
- invite 폴더를 추후 추가할 팀 관리 폴더와 통합. 팀 관리 폴더는 features에 등록
- Input.tsx와 InputSearch.tsx 통합
- input에 적용된 디바운스를 상위 컴포넌트가 관리하도록 역할 이전
- 채팅 콘텐츠가 가로 스크롤이 되는 것 방지
- 채팅 형식을 DB에 맞게 변경
- 포커스가 채팅의 하단부을 가리키도록 변경

## 고려사항
- RightSection.tsx, MainBody.tsx는 필요에 의해 별도의 파일로 분리했지만 (코드의 재사용 방지, css의 명확성) 아직까진 하는 역할이 컨테이너 뿐이라서 아쉬움.

## 완료된 것
- 핵심 화면: 친구 화면, 친구 채팅 화면
- 화면의 명확한 세션 구분
- 최소한의 라우팅 적용

## 예정 목표
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
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
- `src/` : 앱의 실제 코드
[src](src/README.md)

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
- 회원가입 로직 -> 기능별 라우팅 -> 리팩토링

## 세부 목표
- 회원가입, 로그인 페이지 api 서버 요청하고 응답받기
- 회원가입에서 중복확인이 완료되지 않았다면 회원가입 무시하기
- Button 내부 컴포넌트들에 리액트 라우터에서 사용하는 Link 적용
- LeftMenu의 type들을 각 컴포넌트에 통째로 넣는 방법 찾기
- 로그아웃 버튼을 눌렀을 때, 바로 시작 페이지로 넘어가는 것이 아니라 모달을 띄워서 질의하는 방식으로 변경
- 로그인 후, 시작 페이지에서 시작하기 및 로그아웃 버튼을 제공. 시작하기 버튼을 누르면 바로 Main 페이지로 넘어감
- 전역 색상 스타일 적용

## 완료된 것
- 핵심 화면: 친구 화면, 친구 채팅 화면
- 화면의 명확한 세션 구분
- 최소한의 라우팅 적용

## 미래에
- src(루트)에 공용 hooks/, utils/, 각 features에 전용 hooks/, utils/를 두어 관리
- store/도 루트에 필요하다면 두고 관리

## 다음 프로젝트 시
- Tailwind CSS + clsx 적용

## 참고 링크
- storybook: https://storybook.js.org/
- lucide-react: https://lucide.dev/icons/plus
- radix-ui: https://www.radix-ui.com/
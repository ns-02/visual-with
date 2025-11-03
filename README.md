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
- `api/` : 서버와 통신하는 코드 (현재 더미 파일)
- `assets/` : 이미지, 아이콘
- `components/` : 그룹 단위의 공용 UI 컴포넌트
- `components/ui` : 기본 단위의 공용 UI 컴포넌트
- `features/` : 기능 단위 코드
- `layouts/` : 화면 레이아웃
- `pages/` : 페이지 단위 컴포넌트 (시작 및 로그인, 회원가입, 메인 화면)
- `utils/` : 재사용 가능한 함수들
- `styles/` : 전역 스타일, CSS 변수
- `stories/` : Storybook 파일
- `ref/` : 참고용 파일 (실제 프로젝트와 무관)

## 설계
- 팀 초대받는 화면 설계

## 사용 중인 라이브러리 또는 툴
- Vite: 빌드 도구
- lucide-react: 아이콘 불러오기
- Storybook: 재사용되는 컴포넌트 관리 및 정리
- radix-ui: ui 제작 도구

## 뭘 해야할까
- Tailwind CSS + clsx 적용 (안함)
- css module 적용
- 화면 내 세부 요소 구현
- 라우팅: 라우팅 배운 후 진행하면 됨
- 전체 화면 디자인
- 세부 요소 디자인

## 완료된 것
- 핵심 화면: 친구 화면, 친구 채팅 화면
- 화면의 명확한 세션 구분

## 미래에
- src(루트)에 공용 hooks/, utils/, 각 features에 전용 hooks/, utils/를 두어 관리
- store/도 루트에 필요하다면 두고 관리

## 참고 링크
- lucide-react: https://lucide.dev/icons/plus



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

## 뭘 해야할까

- 채팅을 문자열이 아닌 객체 배열 형식으로 변경
- 채팅 형식을 DB에 맞게 변경
- 채팅의 하단부부터 출력되도록 변경(우선순위 낮음)
- radix-ui 적용 (필요 시)
- Tailwind CSS + clsx 적용 (안함)
- css module 적용
- 모달 구현
- 화면 내 세부 요소 구현
- 라우팅: 라우팅 배운 후 진행하면 됨
- 전역 ui 폴더 만들기 (모달 구현 시 우선순위 조정 가능)
- 전체 화면 디자인
- 버튼 아이콘 등록
- 세부 요소 디자인
- 요소별 UI 반응 구현 (호버링 등)

## 사용 중인 라이브러리 또는 툴
- lucide-react: 아이콘 불러오기
- Storybook: 재사용되는 컴포넌트 관리 및 정리


## 완료된 것

- 핵심 화면: 친구 화면, 친구 채팅 화면
- 도구 간 이동(버튼 동작)
- 메인 페이지의 각 페이지별 헤더 전달: 과연 이게 최선일까? -> 메인바디를 중간자로 두어서 해결
- 헤더, 푸터 css 구조 조정
- 화면의 명확한 세션 구분
- 버튼 및 인풋 요소의 크기 및 형태 디자인 적용
- 메뉴 바, 헤더, 푸터의 배치 디자인, 아이콘 적용
- 채팅 전송 버튼 및 엔터 키로 채팅 동작 구현
- sessionStorage로 앱 실행 중 데이터 유지

## 미래에

- src(루트)에 공용 hooks/, utils/, 각 features에 전용 hooks/, utils/를 두어 관리
- store/도 루트에 필요하다면 두고 관리

## 참고 링크

- lucide-react: https://lucide.dev/icons/plus



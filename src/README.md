
---
## 📂 `src/README.md`

앱의 모든 작동하는 코드가 포함된 폴더  
`App.tsx`와 `index.tsx`는 앱의 시작점 역할

## 파일 및 폴더
- [`../`](../README.md)
- `App.tsx` : 라우팅, 전역 레이아웃 연결
- `index.tsx` : React를 브라우저에 연결하는 진입점
- [`api/` : 서버와 통신하는 코드](api/README.md)
- [`assets/` : 이미지, 아이콘](assets/README.md)
- [`components/` : 그룹 단위의 공용 UI 컴포넌트](components/README.md)
- `components/ui` : 기본 단위의 공용 UI 컴포넌트
- [`context/` : 전역 컨텍스트 관리](context/README.md)
- [`hooks/` : 커스텀 훅](hooks/README.md)
- [`main/ : 메인 페이지`](main/README.md)
- [`pages/` : 라우팅되는 페이지](pages/README.md)
- [`routes/` : 라우팅 관련 코드](routes/README.md)
- [`utils/` : 재사용 가능한 함수들](utils/README.md)
- [`styles/` : 전역 스타일, CSS 변수](styles/README.md)
- [`stories/` : Storybook 파일](stories/README.md)

## README 작성 규칙
각 README.md 파일에, 다음 내용을 최소한으로 기록할 것.
- main/features/기능명: 해당 기능이 담당하는 주요 유즈케이스 (예: 친구 요청 목록 조회 및 수락/거절 처리)
- components: 이 폴더에 있는 컴포넌트들의 명명 규칙 및 데이터/로직 포함 여부 규칙
- api: 백엔드 API와의 연동 상태 및 주요 API 호출 로직

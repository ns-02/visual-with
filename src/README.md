
---
## 📂 `src/README.md`

앱의 모든 작동하는 코드가 포함된 폴더  
`App.tsx`와 `index.tsx`는 앱의 시작점 역할

## 파일 및 폴더
- [`../`](../README.md)
- `App.tsx` : 라우팅, 전역 레이아웃 연결
- `index.tsx` : React를 브라우저에 연결하는 진입점
- [`core/` : 라우팅 등 앱의 핵심 구조](core/README.md)
- [`features/` : 앱의 전체 기능](features/README.md)
- [`mocks/` : 목업 데이터](mocks/README.md)
- [`shared/` : 재사용되는 코드 모음](shared/README.md)
- [`pages/` : 라우팅되는 페이지](pages/README.md)

## README 작성 규칙
각 README.md 파일에, 다음 내용을 최소한으로 기록할 것.
- main/features/기능명: 해당 기능이 담당하는 주요 유즈케이스 (예: 친구 요청 목록 조회 및 수락/거절 처리)
- components: 이 폴더에 있는 컴포넌트들의 명명 규칙 및 데이터/로직 포함 여부 규칙
- api: 백엔드 API와의 연동 상태 및 주요 API 호출 로직

## 윈도우에서 파일 구조 내보내는 방법
`tree /f /a > fileStructure.txt`

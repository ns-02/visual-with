
---
## 📂 `routes/README.md`

라우팅 관련 컴포넌트 및 함수 모음

## 파일 및 폴더
- [`../`](../README.md)

## 완료된 것
- ROUTES로 모든 id와 path의 정보를 저장
- id -> path, path -> id 각각 전역 Map을 만들고, 이를 함수로 호출하여 값 반환
- RouteWatcher로 현재 url의 변화를 감지하여 ToolContext에 신호 전달
- 접근 권한 제어: PrivateRoute.tsx에 라우트 가드를 추가
- AuthContext에서 로그인 여부를 확인하고, 로그인이 안 되어 있다면 GuardPage를 출력
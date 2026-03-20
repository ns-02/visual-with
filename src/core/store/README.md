
---
## 📂 `store/README.md`

App 전반에서 사용하는 스토어어 관리

## 파일 및 폴더
- [`../`](../README.md)

## 완료된 것
- ToolId를 담은 전역 컨텍스트를 만들고, useTool()로 사용
- 팀 상태와 친구 상태를 담은 TeamContext, FriendContext 정의
- 인증 상태를 관리하는 context/AuthContext.tsx 만들기
- UserContext.tsx를 추가하여 id, nickname, email 보관
- zustand를 사용하여 context api를 store로 리팩토링
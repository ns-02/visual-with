
---
## 📂 `features/README.md`

메인 페이지에서 동작하는 모든 코드가 기능별로 분리된 폴더

## 파일 및 폴더
- [`../`](../README.md)
- [`userManager/` : 사용자 관리](userManager/README.md)
- [`teamManager/` : 팀 관리](teamManager/README.md)
- [`teamChat/` : 팀 채팅](teamChat/README.md)
- [`fileSharing/` : 파일 공유](fileSharing/README.md)
- [`schedule/` : 일정 관리](schedule/README.md)
- [`todoList/` : 할 일 목록](todoList/README.md)
- [`friendList/` : 친구 목록](friendList/README.md)
- [`directChat/` : 친구 채팅](directChat/README.md)

## 유스케이스 구분
- 0: 아무것도 만들어지지 않음
- 1: UI 구조만 만들어짐
- 2: UI 동작이 만들어짐 (=> 화면만 보면 그럴싸하게 동작함)
- 3: 프론트엔드의 로직이 만들어짐
- X: 백엔드까지 구현됨 or 완성됨

## 전용 layouts 구분
- Panel: 상위 레이아웃
- Area: 중위 레이아웃

## 완료된 것
- teamManager 폴더 생성
- invite 폴더를 팀 관리 폴더와 통합
- misc (미분류) 폴더 생성
- 로그아웃 다이얼로그 정의
- 기능과 관련된 모든 types과 interface 정의를 (기능명)/types/index.ts에 기록
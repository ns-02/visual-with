
---
## 📂 `components/README.md`

앱 전체에서 공통으로 사용하는 컴포넌트 및 UI 모음
예: 버튼, 입력창

## 파일 및 폴더
- [`../`](../README.md)

## 규칙
- UI 컴포넌트는 **재사용 가능**해야 함
- 스타일은 props 또는 className으로 조절할 수 있어야 함
- 공용 UI(components)는 스타일과 구조를 정의해야 함
- 전용 UI(features)는 데이터와 로직을 담당해야 함
- 최소 단위인 버튼이나 입력창은 `components/ui/` 폴더에서 관리
- "채팅 입력 도구 모음"같은 요소들의 그룹은 `components` 폴더에서 관리

## 완료된 것
- 전역 ui 폴더 만들기
- 버튼 및 인풋 요소의 크기 및 형태 디자인 적용
- 버튼 아이콘 등록 (메뉴 바, 헤더, 푸터 한정)
- 메뉴 바, 헤더, 푸터의 배치 디자인, 아이콘 적용
- 업로드 버튼의 역할 재정의
- Input.tsx에서 디바운스 등의 기법을 적용해서 setChat()의 호출 빈도 낮추기
- 정사각형 버튼 정의
- 드롭다운 버튼 생성
- Button의 square (boolean)을 없애고 shape로, 모양은 정사각형, 원, 직사각형 3개
- 원 버튼, 버튼을 버튼으로 통합
- Button 내부 컴포넌트들에 리액트 라우터에서 사용하는 Link 적용
- Input.tsx와 InputSearch.tsx 통합
- ToolHeader가 제대로 변경되지 않는 버그 수정
- 드롭다운의 한 줄을 담당하는 Item 생성
- 다이얼로그의 내용을 담은 Field 생성
- 공용 UI, 전용 UI 분리
- 다이얼로그 폴더 생성
- Dialog, AlertDialog 정의
- 다이얼로그 내 ui 폴더 생성
- Group, Input, Row 정의
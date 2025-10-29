
---
## 📂 `components/README.md`
```md
# components/

앱 전체에서 공통으로 사용하는 컴포넌트 및 UI 모음
예: 버튼, 입력창

## components/: 파일 및 폴더
- `ui/` : 최소 단위 요소 모음
- `Container.tsx` : 요소들을 감싸는 컴포넌트. 로그인, 회원가입, 회원가입 완료 페이지에서 사용
- `ToolHeader.tsx` : span, 검색 입력란, 관련 버튼 3개를 묶은 컴포넌트. 메인헤더 레이아웃 -> 모든 도구들의 헤더에서 사용

## ui/: 파일 및 폴더
- `Button.tsx` : 모서리가 둥근 직사각형 버튼 컴포넌트. 상위 컴포넌트에서 사용
- `CircleButton.tsx` : 원형 버튼 컴포넌트. LeftMenu.tsx에서 사용
- `Input.tsx` : 입력 창 컴포넌트. ChatFooter.tsx에서 사용
- `InputSearch.tsx` : 검색 임력 창 컴포넌트. Toolheader.tsx에서 사용

## 규칙
- UI 컴포넌트는 **재사용 가능**해야 함
- 스타일은 props 또는 className으로 조절할 수 있어야 함
- 최소 단위인 버튼이나 입력창은 `components/ui/` 폴더에서 관리
- "채팅 입력 도구 모음"같은 요소들의 그룹은 `components` 폴더에서 관리
- 복잡한 기능은 features에서 담당

## 수정사항
- Input.tsx는 채팅을 목적으로, InputSearch.tsx는 검색을 목적으로 사용 중. 한 기능에 종속되지 않도록 바꾸고, Input.tsx로 통합할 예정.

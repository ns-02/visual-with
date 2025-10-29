
---
## 📂 `layouts/README.md`
```md
# layouts/

페이지의 기본 구조(헤더, 사이드 바) 담당
현재는 메인 페이지: `MainPage.tsx` 의 레이아웃만 관리 중

## 파일 및 폴더
- `LeftMenu.tsx` : 왼쪽 사이드 바로 메인 페이지에서 네비게이터 역할을 담당.
- `RightSection.tsx` : 사이드 바를 제외한 나머지 영역으로 헤더, 본문 내용 등을 포함함.
- `MainHeader.tsx` : 오른쪽 영역에서 헤더를 담당. ToolHeader를 출력할 데이터를 담고 있음.
- `MainBody.tsx` : 오른쪽 영역에서 헤더를 제외한 나머지 영역으로, 각 features가 실제로 보여지는 곳.

## 규칙
- 레이아웃은 공통된 틀만 담당, 기능 로직은 포함하지 않음
- 자식 요소는 props.children으로 받음

## 고려사항
- RightSection.tsx, MainBody.tsx는 필요에 의해 별도의 파일로 분리했지만 (코드의 재사용 방지, css의 명확성) 아직까진 하는 역할이 컨테이너 뿐이라서 아쉬움.
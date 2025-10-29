
---
## 📂 `layouts/README.md`
```md
# layouts/

페이지의 기본 구조(헤더, 사이드 바) 담당
현재는 메인 페이지: `MainPage.tsx` 의 레이아웃만 관리 중

## 규칙
- 레이아웃은 공통된 틀만 담당, 기능 로직은 포함하지 않음
- 자식 요소는 props.children으로 받음
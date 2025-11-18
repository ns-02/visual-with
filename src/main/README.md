
---
## 📂 `pages/main/README.md`

로그인 후 사용자가 가장 많이 사용할 메인 페이지

## 파일 및 폴더
- [`../`](../README.md)
- [`features/` : 실제 기능별 코드](features/README.md)
- [`layouts/` : 화면 레이아웃 구조](layouts/README.md)

## 완료된 것
- 메인 페이지 내 기능별 라우팅
- StartPage를 HomePage로 변경
- 직접 링크로 접근했을 때, 메인헤더가 변경되지 않는 문제 수정
- MainPage 내 요소가 바뀔 시, MainPage가 4번 렌더링되는 문제 (라우팅 변경 전에는 2번이었음) -> ChatGPT: context 써서 초기 렌더링만 되도록 바꿈
- 메인페이지를 main 폴더에, 메인페이지 전용으로 사용하던 layouts 폴더를 main 폴더 내에 이동
- 각 도구별 pages와 section에 일괄 aliceblue 배경색과 border 색 적용
# 데일리 로그

## 260310
  - css 1차원 정렬 방법: `display: flex`

## 260317
  - 리액트의 set~ 함수에 값을 할당할 때엔 직접 넣지 말고, 새로 변수를 선언해서 넣어야 함

## 260318
  - useEffect() 내부에는 리액트 훅을 사용해선 안됨

## 260319
  - zustand 라이브러리 도입, 개발 모드에서 성능 점수 58점 기록 (네트리파이에선 100점)

## 260324
  - e.preventDefault()의 중요성을 체감함. FileUploadDropdown의 Dropdown.Item에서 이것을 적용했더니 input의 변경이 발생하지 않던 문제가 해결됨. 이전에는 자동으로 창이 닫혔기 때문에 input의 변경을 확인할 수 없었음.

## 260325
  - teamChat에서 파일 업로드를 통해, fileSharing의 파일 목록을 갱신하는 기능이 필요함. 기존 fileSharing은 자체적으로 store를 갖고 있어, 파일 목록의 정보를 관리하고 사용할 수 있음. 다만, teamChat의 파일 업로드 드롭다운에서 fileSharing의 store를 직접 참조하는 문제가 발생함. 이 문제를 해결하기 위해 store의 위치를 공통 shared로 옮기거나 별도 유틸함수를 만드는 등 해결 방법에 대해 고민 중.
  - 대안 1: store 위치를 기존 feature에서 shared로 옮기기
  - 대안 2: store 위치는 유지하되, 유틸 함수를 만들어서 방법을 찾기 (가능할지는 미지수)
  - 대안 3: 그냥 teamChat에서 파일 업로드 기능을 없애버리기
  - 현행 유지하기: feature에서 서로 다른 feature의 store를 직접 참조
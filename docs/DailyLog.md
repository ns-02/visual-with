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

## 260410
  - 아이디로 팀 초대 api 호출 오류 발생. 프론트엔드 부분 문제로 추정 중

## 260411
  - 아이디로 팀 초대 api 호출 오류는, 응답에 데이터가 없어서 발생한 문제로 확인됨. (`await response.json()`: 여기서 에러 발생) 문제 발생 시, 개발자 도구의 네트워크 탭을 꼭 확인할 것.
  - 팀 삭제 api 해결됨. 원인은 서버에서 json 형식으로 응답하지 않고 plain text 형식으로 응답해서, api에서 json으로 변환하는 함수에서 오류가 발생했던 것.
  - 역할 데이터(TeamRule) 적용 방법을 고민. -> 팀 아이디, 역할 타입, 역할 이름 3개로 분리하여 저장하고, 별도 스토어를 두어 관리. 이를 TeamManager에서 불러 사용. 역할 이름은 역할 타입에 따라 저장됨. 역할에 따른 이름을 불러오기 위해선, getTeamRuleName()을 사용.

## 260415
  - FIleUploadCard.tsx
  - 파일 업로드 프로그래스 구현 중, 코드가 중복으로 호출됨
  - 원인은 useEffect 내부에서 함수 호출 방식으로 setInterval과 setTimeout을 사용한 것이 문제
  - useEffect 내부에서, 리턴 문으로 setInterval과 setTimeout을 호출하여, 문제 해결
  - (구현 방법을 바꾸어, 현재는 useEffect를 사용하지 않음)
  - store 내부에서 progress를 관리하고, useFileManager에서 ref를 사용하여 타이머 중복 호출 방지
  - 기존 delay() 함수를 interval 함수와 통합하여 하나로 관리
  https://gemini.google.com/share/b7f9775e9371

## 260416
  - 새로고침 시, url 직접 입력 시 UI가 팀에 속하지 않거나 의도대로 동작하는 문제 발견
  1) useTeamManager에서 teamData 존재 여부에 따른 else 조건을 추가하여 수정
  - 생각보다 문제가 심각함 비상
  - 임시 조치: route 브랜치를 추가로 만들어 기존 develop 브랜치와 분리

## 260418
  - 확인된 url/routing 관련 상태 관리 오류
  1) LeftMenu의 DropdownTrigger: selectTeamName[0]에서 타입 오류
  2) LeftMenu의 renderMenuItem: 선택된 팀 아이디가 존재하지 않는 오류
  3) LeftMenu의 툴 이동 메뉴로 url 이동 및 UI 변경이 발생하지 않는 오류
  4) LeftMenu의 TeamDropdown: 팀이 변경되지 않는 오류
  - 예상 원인: 새로고침 시 선택된 팀의 id가 어디에도 저장되지 않음
  - 조치
  1) url의 teamId가 null일 때, 선택된 teamId를 변경하지 않는 예외처리
  2) 선택된 팀 id, name을 로컬스토리지에 저장
  3) useToolId를 LeftMenu에서 사용
  4) isTeamMember(지역), isTeamInit(스토어) 두 조건으로 에러 대응
  5) url에서 toolId를 찾지 못한 경우, null이 아닌 home을 반환하도록 변경
  - 교훈: url에서 뽑은 정보를 바탕으로 UI를 업데이트하기. 순수 변수와 UI의 변수를 분리하기. 
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
  - 교훈
  1) url에서 뽑은 정보를 바탕으로 UI를 업데이트하기
  2) 순수 변수와 UI의 변수를 분리하기
  3) 예외 처리 잘 하기

## 260420
  - TeamRuleData -> TeamMemberShipData 변경, TeamId 뿐만 아니라 UserId도 함께 받도록 변경 (1:N 관계 데이터)
  - (공동)리더만 팀 관리 버튼을 클릭할 수 있도록 함
  - schedule, todo에 authorId가 출력되도록 변경
  - 권한에 따른 명령 구분: 리더와 공동리더는 다른 사람의 생성물을 삭제, 수정 가능. 멤버는 자신의 것만 가능 불가능.

### 코멘트
  - 파일공유가 하드코딩인지 실제 프론트엔드 내 데이터를 전달하는지 확인 필요

## 260421
  - 오버엔지니어링을 인식. 과한 추상화와 분리를 줄이고자 파일을 통합함. (기존 250개 -> 200개)
  - store, models 통합, features의 레이아웃을 모두 page로 통합.
  - teamId와 toolId를 url 단위로 관리 (persist 로컬스토리지 이용) 
  - 버튼 형식 통합

### 오버엔지니어링 축소 변경사항
  - 드롭다운 추상화 (PermissionDropdown 사용)
  - 과도하게 큰 로직을 사용하던 버튼 로직을 제거 (isLoading)
  - 분리된 button, authButton, contentButton을 하나의 button으로 통합
  - shared에 domain 폴더 도입 
  - 개별 feature에 존재했던 models의 위치를 shared로 변경
  - useAuthStore, useToolIdStore를 useUserStore에 통합
  - useTeamStore, useTeamMemberShipStore를 useWorkSpaceStore로 통합
  - useWorkSpaceParams 도입, RouteWatcher 삭제
  - 여러 개의 models를 User.ts, WorkSpace.ts 2개의 파일로 통합 (Friend.ts도 User.ts에 포함)
  - feature 내부 layouts을 page에 전부 통합
  - shared 폴더의 `ui`, `/dialogs`, `/dialogs/ui`, `/layouts`를 전부 `/components` 폴더로 통합 
  - feature 내부의 `/ui`, `/dialogs`를 `/components` 폴더로 통합하여 평탄화
  - 각 폴더에 존재하던 26개의 세부 리드미 삭제

### 코멘트
 - Button에서 isLoading 관리를 없애버림. 추후 기능 구현 시 더 상위 컴포넌트에서 isLoading을 넘겨줄 것
 - fileUploadDropdown은 팀 채팅 기준으로 만들어졌으며, 추후 친구 채팅에서 파일 업로드 시 이를 수정해야 함 (완료)

## 260422

### 핵심 변경사항
  - 친구 id에 따른 라우팅 로직 추가
  - 팀 파일, 다이렉트 파일 구분
  - 재랜더링 최적화
  - 오버엔지니어링 축소

### 코멘트
  - 라우팅에서 친구 id를 추가했더니 directchat이 teamId로 인식하는 버그 발생
  - AppRoute에서 친구 id에 옵셔널 연산자를 추가했더니 버그가 해결됨.
  - 라우팅 로직을 한곳에 몰아넣어야 함.
  - 친구채팅 라우팅 로직 보완 필요. 다른 메뉴에서 친구 채팅으로 옮길 때, 저장된 친구 ID가 있다면 해당 url로, 없으면 기본값.

### 오버엔지니어링 축소 변경사항
  - 불필요한 index.ts 제거 (6개)
  - `shared/domain` 폴더 삭제. 각각 공용 components, 공용 hooks에 통합 
  - usePath 삭제 (초창기 함수 파일인데, 이 역할을 useWorkSpaceParams가 물려받음)
  - 기존 dateUtils을 삭제하고 formatDate 통합
  - 불필요 타입 파일, testPage 제거
  - 파일 관련 유틸 함수 합치기 (파일 사이즈, 파일 타입 포멧)

### 기타 세부 변경사항
  - 일정 페이지에서 formatDate를 사용하도록 변경
  - todo, schedule의 상태에 따른 데이터 관리를 useEffect에서 원본 배열 필터링 & useMemo로 변경
  - leftMenu, MainHeader 최적화
  - 파일 데이터를 팀 파일 데이터, 다이렉트 파일 데이터로 분리
  - 기존 파일 업로드 드롭다운에서 직접 호출하던 파일 업로드 로직을 페이지(상위)에 위임
  - useFileStore를 useTeamFileStore, useDirectFileStore로 복제
  - useFileManager를 useTeamFileManager, useDirectFileManager로 복제하고 기존 useFileManager는 추상화
  - 불필요한 updateSelectFriend 제거
  - selectFriendData를 제거하고 id로 교체, 로컬스토리지 등록

## 260423

### 핵심 변경사항
  - 라우팅 로직을 한 곳에 몰아넣음. directPage & leftMenu => useRouteManager.
  - 현재 url과 저장된 값을 바탕으로, 선택된 팀 이름과 역할을 계산하도록 변경
  - useWorkSpaceParams(url에서 teamId 추출) => useCurrentWorkspace(selectTeamName, currentRule)
  - 프로젝트 경량화
  - feature 내부 컴포넌트 css는 파일 하나로 통합
  - 최신 데이터를 store가 아닌 url에서 직접 받아오도록 변경
  - 기능 변경사항: 친구 채팅 접근 시, 이전 친구 아이디를 바탕으로 라우팅
  - 기능 변경사항: 친구 채팅으로 파일 업로드 시, 오른쪽 패널에 표시
  - 라우팅 시 상대경로가 아닌 절대경로를 사용하도록 변경
  - - 기존엔 상대경로로 잘 동작했는데, friendid를 도입한 후 예측할 수가 없게 되어 변경하게 됨
  
###  기타 세부 변경사항
  - useTeamManager의 navigate 로직을 useRouteManager로 분리
  - isTeamInit 처리를 useTeamManager가 아닌 store 내부에서 처리
  - 팀 전환 라우트 로직을 dropdown이 아닌 leftMenu에서 호출하여 전달
  - useWorkSpaceParams의 각 use 훅에서, useEffect 제거
  - - 이에 따라 store에선 최신의 값을 보장할 수 없게 됨
  - - url은 유일한 진실의 원천
  - 스토어의 값을 맞추기 위해, useRouteManager에서 라우팅 시 스토어의 값도 같이 바뀌도록 변경
  - 스토어에선 선택된 팀 이름, 현재 룰과 관련된 데이터와 로직 제거
  - 툴 아이디를 추출하는 함수 getToolIdFromPath()를 제외한 나머지 함수 3개를 전부 없애버림
  - - getPathFromToolId()는 라우팅 로직으로 변경
  - routeMap의 util 함수를 useRouteManager에 별도 배치
  - directChatPage와 leftMenu의 라우팅 로직을 useRouteManager에 통합
  - leftMenu의 isTeamMember를 useTeamManager에 위임
  - leftMenu 직관화
  - 코드 수가 적은 css 파일은 global.css에서 작은 클래스 단위로 관리
  - features의 컴포넌트 폴더에 각각 존재했던 css 파일을 하나의 `-UI.module.css` 파일로 통합

### 코멘트
  - 오버엔지니어링 축소 결과: 기존 파일 250개, 폴더 100개 => 파일 160개, 폴더 70개


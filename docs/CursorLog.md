코드 기준으로 보면, 이 프로젝트는 **“팀 기반 협업 워크스페이스”** 도메인(팀/멤버십, 채팅, 일정, 할일, 파일, 친구/DM, 인증)을 다루고 있는데, 핵심 규칙이 모델로 충분히 올라오지 않은 부분이 꽤 있습니다.

## 우선 보완이 필요한 도메인 갭

- **[높음] 팀 권한이 멤버십이 아니라 팀 자체에 붙어 있음**  
  `src/shared/models/TeamRule.ts`, `src/core/store/useTeamRuleStore.ts`  
  → 권한은 “팀-사용자 관계” 규칙인데 현재 구조로는 사용자별 권한(관리자/멤버)을 제대로 표현하기 어렵습니다.

- **[높음] 일정 도메인 규칙(시작/종료/상태 전이) 부재**  
  `src/features/schedule/models/Schedule.ts`, `src/features/schedule/store/useScheduleStore.ts`, `src/features/schedule/dialogs/AddScheduleDialog.tsx`  
  → 시작 <= 종료, 완료 시 종료시간 필수 같은 불변식이 없습니다.

- **[높음] 파일 업로드 도메인이 목업 상태에 머무름**  
  `src/features/fileSharing/store/useFileStore.ts`, `src/features/fileSharing/hooks/useFileManager.ts`  
  → 업로더/시간이 하드코딩되고, 업로드 상태머신(queued/uploading/failed/retry/cancel)이 약합니다.

- **[높음] API 에러가 도메인 의미를 잃음**  
  `src/shared/api/api.ts`  
  → 현재 일반 `Error` 중심이라 “이미 팀 멤버”, “초대 충돌”, “권한 없음” 같은 도메인 오류를 UI에서 분기하기 어렵습니다.

- **[높음] 인증/세션 도메인 약함**  
  `src/core/store/useAuthStore.ts`, `src/pages/auth/LoginPage.tsx`, `src/core/routes/PrivateRoute.tsx`  
  → `isLoggedin` 단일 플래그 중심이라 토큰 만료/권한 범위/세션 복원 같은 실제 규칙이 모델링되지 않았습니다.

- **[중간] 팀 선택 상태 중복으로 불일치 가능**  
  `src/core/store/useTeamStore.ts`  
  → `selectTeamId`와 `selectTeamName`를 동시 저장해 드리프트 위험이 있습니다.

- **[중간] Todo가 체크박스 수준 모델**  
  `src/features/todoList/models/Todo.ts`, `src/features/todoList/store/useTodoStore.ts`  
  → 담당자/우선순위/상태 흐름 등 협업 할일 도메인 지식이 빠져 있습니다.

- **[중간] 친구 관계 lifecycle 미모델링**  
  `src/features/friendList/models/Friend.ts`, `src/features/friendList/store/useFriendStore.ts`  
  → 요청/수락/거절/차단 상태와 방향성(requester/addressee)이 명시되지 않습니다.

- **[중간] UI 문자열/정규식에 비즈니스 규칙 하드코딩**  
  `src/features/teamManager/dialogs/InviteTeamDialog.tsx`, `src/features/teamManager/dialogs/DeleteTeamDialog.tsx`, `src/core/routes/routeMap.ts`  
  → 규칙이 정책 객체/도메인 상수로 분리되지 않아 변경/재사용이 어렵습니다.

- **[높음] 도메인 규칙 테스트/문서 부족**  
  `docs/features.md`, `src/features/teamManager/README.md`  
  → 규칙이 코드에 암묵적으로 흩어져 있고 회귀 방지 장치가 약합니다.

## 바로 할 수 있는 개선 (Quick Wins)

- 도메인 에러 코드를 API 레이어에 추가 (`errorCode` 기반 분기).
- 일정/팀/초대 입력 검증을 스토어 또는 유즈케이스로 이동.
- UI 하드코딩 규칙(삭제 키워드, 초대 링크 템플릿, ID 형식)을 정책 상수로 분리.
- `selectTeamName` 파생값화(저장은 `selectTeamId` 중심).

## 구조적 개선 (중기)

- `TeamMembership`, `Friendship`, `FileUpload`, `Task` 같은 명시적 도메인 모델 도입.
- 도메인 유즈케이스 계층에서 불변식 강제 (`createSchedule`, `inviteMember`, `deleteTeam` 등).
- 핵심 규칙 문서 `docs/domain-rules.md` + 스토어/서비스 단위 테스트 추가.

원하시면 다음 단계로, 제가 **“도메인 규칙 문서 초안 + 타입 모델 리팩터링 우선순위 PR 플랜”**까지 바로 만들어드릴게요.
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { selectTeamMemberList } from '@shared/api/baseApi';
import type { UserTeamRule } from '@shared/api/baseModel';
import { getTeamChat } from '@shared/api/chat/ChatApi';
import { Button, Input } from '@shared/components';
import { useState } from 'react';

const USER_TEAM_RULES: UserTeamRule[] = ['ADMIN', 'SUB_ADMIN', 'MEMBER'];

export function ApiTestPage() {
  const [result, setResult] = useState<null | unknown>(null);
  const [chatError, setChatError] = useState<string | null>(null);
  const defaultUserId = useUserStore((state) => state.user)?.id ?? '';
  const defaultTeamId = useWorkspaceStore((state) => state.selectTeamId) ?? '';

  const [userId, setUserId] = useState(defaultUserId);
  const [teamId, setTeamId] = useState(defaultTeamId);
  const [userTeamRule, setUserTeamRule] = useState<UserTeamRule>('MEMBER');

  const handleClick = async () => {
    if (!teamId) return;

    const data = await selectTeamMemberList({ teamId });
    setResult(data);
  };

  const handleChatClick = async () => {
    if (!teamId) return;

    setChatError(null);
    try {
      setResult(await getTeamChat({ teamId }));
    } catch (error) {
      setChatError(error instanceof Error ? error.message : '채팅 조회 실패');
    }
  };

  return (
    <>
      <Input
        value={userId}
        onChange={setUserId}
        placeholder='userId'
        sizeMode='flexible'
      />
      <Input
        value={teamId}
        onChange={setTeamId}
        placeholder='teamId'
        sizeMode='flexible'
      />
      <select
        value={userTeamRule}
        onChange={(e) => setUserTeamRule(e.target.value as UserTeamRule)}
      >
        {USER_TEAM_RULES.map((rule) => (
          <option key={rule} value={rule}>
            {rule}
          </option>
        ))}
      </select>
      <br />

      <Button style={{ backgroundColor: 'aliceblue' }} onClick={handleClick}>
        API 호출
      </Button>
      <Button style={{ backgroundColor: 'aliceblue' }} onClick={handleChatClick}>
        채팅 조회 테스트
      </Button>

      {chatError && <p>{chatError}</p>}
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
}

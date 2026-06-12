import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { selectTeamList, selectTeamMemberList } from '@shared/api/baseApi';
import { Button, Input } from '@shared/components';
import { useState } from 'react';

export function ApiTestPage() {
  const [result, setResult] = useState<null | unknown>(null);
  const defaultUserId = useUserStore((state) => state.user)?.id ?? '';
  const defaultTeamId = useWorkspaceStore((state) => state.selectTeamId) ?? '';

  const [userId, setUserId] = useState(defaultUserId);
  const [teamId, setTeamId] = useState(defaultTeamId);

  const handleClick = async () => {
    if (!teamId) return;

    const data = await selectTeamMemberList({ teamId });
    setResult(data);
  };

  return (
    <>
      <Input
        value={userId}
        setChat={setUserId}
        placeholder='userId'
        sizeMode='flexible'
      />
      <Input
        value={teamId}
        setChat={setTeamId}
        placeholder='teamId'
        sizeMode='flexible'
      />

      <Button style={{ backgroundColor: 'aliceblue' }} onClick={handleClick}>
        API 호출
      </Button>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
}

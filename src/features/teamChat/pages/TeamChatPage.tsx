import TeamChatRoot from '../layouts/TeamChatRoot';
import TeamChatPanel from '../layouts/TeamChatPanel';
import TeamChatBottom from '../layouts/BottomInputPanel';
import useTeamChatThread from '../hooks/useTeamChatThread';
import { useEffect } from 'react';

function TeamChatPage() {
  const { allChat, handleTeamChatSend, isMyMessage } = useTeamChatThread();

  useEffect(() => {
    isMyMessage();
  }, [allChat]);

  return (
    <TeamChatRoot>
      <TeamChatPanel allChat={allChat} />
      <TeamChatBottom onSend={handleTeamChatSend} />
    </TeamChatRoot>
  );
}

export default TeamChatPage;

import { useEffect, useState } from 'react';
import { useTeam } from '@core/contexts/TeamContext';
import { ChatItem } from '@shared/models/Chat';
import { getItem, setItem } from '@shared/utils/sessionStorage';
import getMaxId from '@shared/utils/getMaxId';
import TeamChatRoot from '../layouts/TeamChatRoot';
import TeamChatPanel from '../layouts/TeamChatPanel';
import TeamChatBottom from '../layouts/BottomInputPanel';
import useTeamChatThread from '../hooks/useTeamChatThread';

function TeamChatPage() {
  const { allChat, handleTeamChatSend } = useTeamChatThread();

  return (
    <TeamChatRoot>
      <TeamChatPanel allChat={allChat} />
      <TeamChatBottom onSend={handleTeamChatSend} />
    </TeamChatRoot>
  );
}

export default TeamChatPage;

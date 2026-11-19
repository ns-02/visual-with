import { request } from '../baseApi';
import type { GetTeamChatRequest, TeamChatMessage } from './ChatModel';

export const getTeamChat = async ({
  teamId,
}: GetTeamChatRequest): Promise<TeamChatMessage[]> => {
  return await request(`/api/chat/${teamId}`, {
    method: 'GET',
  });
};

import { request } from '../baseApi';
import type { GetTeamChatRequest } from './ChatModel';

export const getTeamChat = async ({
  teamId,
}: GetTeamChatRequest): Promise<unknown> => {
  return await request(`/chat/${teamId}`, {
    method: 'GET',
  });
};

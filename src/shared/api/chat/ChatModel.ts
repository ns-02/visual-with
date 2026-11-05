export interface GetTeamChatRequest {
  teamId: string;
}

export interface TeamChatMessage {
  roomId: string;
  sender: string;
  message: string;
  receivedDate: string;
  receivedTime: string;
}

export type ChatItem = {
  chat: string;
  time: string;
};

export default interface Chat {
  allChat: ChatItem[];
};
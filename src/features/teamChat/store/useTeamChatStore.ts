// import { create } from 'zustand';

// type FIleState = 'wait' | 'uploading' | 'complete';

// interface TeamChatState {
//   fileState: FIleState;
//   uploadFile: (file: File, formattedDate: string) => void;
// }

// export const useTeamChatStore = create<TeamChatState>((set) => ({
//   fileState: 'wait',

//   uploadFile: (file, formattedDate) =>
//     set((state) => ({
//       fileState: 'uploading'
//     })),
// }));

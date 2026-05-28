import { useTeamFileStore } from '@features/fileSharing/store/useTeamFileStore';
import { useTodoStore } from '@features/todoList/store/useTodoStore';
import { TeamId } from '@shared/models/Workspace';
import { create } from 'zustand';

interface TodoStatusData {
  name: '완료된 할 일' | '남은 할 일';
  value: number;
}

interface FileTypeData {
  name: string;
  value: number;
}

interface MonthlyTodoTrends {
  month: string;
  todos: number;
}

interface DashboardData {
  teamId: TeamId;
  todoStatusData?: TodoStatusData[];
  fileTypeData?: FileTypeData[];
  monthlyTodoTrends?: MonthlyTodoTrends[];
}

interface DashboardState {
  dashboardData: DashboardData[];
  updateTodoStatus: (teamId: TeamId) => void;
  updateFileType: (teamId: TeamId) => void;
  updateTodoTrends: (teamId: TeamId) => void;
}

const calculateTodoStatus = (teamId: TeamId): TodoStatusData[] => {
  const todoData = useTodoStore
    .getState()
    .todoData.filter((t) => t.teamId === teamId);

  const completedTodoCount = todoData.filter((t) => t.checked).length;
  const progressTodoCount = todoData.length - completedTodoCount;

  return [
    { name: '완료된 할 일', value: completedTodoCount },
    { name: '남은 할 일', value: progressTodoCount },
  ];
};

const calculateFileType = (teamId: TeamId): FileTypeData[] => {
  const fileData = useTeamFileStore
    .getState()
    .fileData.filter((t) => t.teamId === teamId);

  const imageFileCount = fileData.filter((f) => f.fileType === 'images').length;
  const videoFileCount = fileData.filter((f) => f.fileType === 'videos').length;
  const audioFileCount = fileData.filter((f) => f.fileType === 'audios').length;
  const otherFileCount =
    fileData.length - (imageFileCount + videoFileCount + audioFileCount);

  return [
    { name: '이미지', value: imageFileCount },
    { name: '비디오', value: videoFileCount },
    { name: '오디오', value: audioFileCount },
    { name: '기타', value: otherFileCount },
  ];
};

const calculateTodoTrends = (teamId: TeamId): MonthlyTodoTrends[] => {
  const todoData = useTodoStore
    .getState()
    .todoData.filter((t) => t.teamId === teamId);

  console.log(todoData);

  // 실제 유효한 데이터가 아님
  return [
    { month: '1월', todos: 22 },
    { month: '2월', todos: 25 },
    { month: '3월', todos: 30 },
    { month: '4월', todos: 33 },
  ];
};

export const useDashboardStore = create<DashboardState>((set) => ({
  dashboardData: [],

  updateTodoStatus: (teamId) => {
    const newTodoStatusData = calculateTodoStatus(teamId);

    set((state) => {
      const isExist = state.dashboardData.some(
        (item) => item.teamId === teamId,
      );

      if (isExist) {
        return {
          dashboardData: state.dashboardData.map((item) =>
            item.teamId === teamId
              ? { ...item, todoStatusData: newTodoStatusData }
              : item,
          ),
        };
      }

      return {
        dashboardData: [
          ...state.dashboardData,
          { teamId, todoStatusData: newTodoStatusData },
        ],
      };
    });
  },

  updateFileType: (teamId) => {
    const newFileTypeData = calculateFileType(teamId);

    set((state) => {
      const isExist = state.dashboardData.some(
        (item) => item.teamId === teamId,
      );

      if (isExist) {
        return {
          dashboardData: state.dashboardData.map((item) =>
            item.teamId === teamId
              ? { ...item, fileTypeData: newFileTypeData }
              : item,
          ),
        };
      }

      return {
        dashboardData: [
          ...state.dashboardData,
          { teamId, fileTypeData: newFileTypeData },
        ],
      };
    });
  },

  updateTodoTrends: (teamId) => {
    const newMonthlyTodoTrends = calculateTodoTrends(teamId);

    set((state) => {
      const isExist = state.dashboardData.some(
        (item) => item.teamId === teamId,
      );

      if (isExist) {
        return {
          dashboardData: state.dashboardData.map((item) =>
            item.teamId === teamId
              ? { ...item, monthlyTodoTrends: newMonthlyTodoTrends }
              : item,
          ),
        };
      }

      return {
        dashboardData: [
          ...state.dashboardData,
          { teamId, monthlyTodoTrends: newMonthlyTodoTrends },
        ],
      };
    });
  },
}));

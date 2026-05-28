import { useTeamFileStore } from '@features/fileSharing/store/useTeamFileStore';
import { useScheduleStore } from '@features/schedule/store/useScheduleStore';
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

interface ChatActivityByTime {
  time: string;
  chats: number;
}

interface DDaySchedules {
  scheduleId: number;
  scheduleTitle: string;
  remainingDays: number;
}

interface RecentlyUploadedFiles {
  fileId: number;
  fileName: string;
  timeAgo: string;
}

interface RecentlyUploadedTodos {
  todoId: number;
  todoTitle: string;
  timeAgo: string;
}

interface DashboardData {
  teamId: TeamId;
  todoStatusData?: TodoStatusData[];
  fileTypeData?: FileTypeData[];
  monthlyTodoTrends?: MonthlyTodoTrends[];
  chatActivityByTime?: ChatActivityByTime[];
  dDaySchedules?: DDaySchedules[];
  recentlyUploadedFiles?: RecentlyUploadedFiles[];
  recentlyUploadedTodos?: RecentlyUploadedTodos[];
}

interface DashboardState {
  dashboardData: DashboardData[];
  updateTodoStatus: (teamId: TeamId) => void;
  updateFileType: (teamId: TeamId) => void;
  updateTodoTrends: (teamId: TeamId) => void;
  updateChatActivity: (teamId: TeamId) => void;
  updateDDaySchedules: (teamId: TeamId) => void;
  updateUploadedFiles: (teamId: TeamId) => void;
  updateUploadedTodos: (teamId: TeamId) => void;
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

const calculateChatActivity = (teamId: TeamId): ChatActivityByTime[] => {
  // 채팅 스토어가 존재하지 않음...
  console.log(teamId);

  // 실제 유효한 데이터가 아님
  return [
    { time: '00-02', chats: 23 },
    { time: '02-04', chats: 7 },
    { time: '04-06', chats: 4 },
    { time: '06-08', chats: 5 },
    { time: '08-10', chats: 41 },
    { time: '10-12', chats: 78 },
    { time: '12-14', chats: 91 },
    { time: '14-16', chats: 105 },
    { time: '16-18', chats: 121 },
    { time: '18-20', chats: 77 },
    { time: '20-22', chats: 45 },
    { time: '22-00', chats: 30 },
  ];
};

const calculateDDaySchedules = (teamId: TeamId): DDaySchedules[] => {
  /**
   * 필요한 것
   *
   * 1. remainingDays 계산
   * 2. 최대 개수 제한
   * 3. 정렬
   */
  //
  const scheduleData = useScheduleStore
    .getState()
    .scheduleData.filter((s) => s.teamId === teamId);

  return scheduleData.map((item) => ({
    scheduleId: item.id,
    scheduleTitle: item.title,
    remainingDays: 0,
  }));
};

const calculateUploadedFiles = (teamId: TeamId): RecentlyUploadedFiles[] => {
  const fileData = useTeamFileStore
    .getState()
    .fileData.filter((t) => t.teamId === teamId);

  // 정렬, 개수 제한 필요
  return fileData.map((item) => ({
    fileId: item.id,
    fileName: item.fileName,
    timeAgo: item.timeAgo || '알 수 없음',
  }));
};

const calculateUploadedTodos = (teamId: TeamId): RecentlyUploadedTodos[] => {
  const todoData = useTodoStore
    .getState()
    .todoData.filter((t) => t.teamId === teamId);

  // todo의 timeAgo 계산 로직 필요
  // 정렬, 개수 제한 필요
  return todoData.map((item) => ({
    todoId: item.id,
    todoTitle: item.title,
    timeAgo: '알 수 없음',
  }));
};

const updateDashboardField = <K extends keyof Omit<DashboardData, 'teamId'>>(
  data: DashboardData[],
  teamId: TeamId,
  fieldKey: K,
  fieldValue: DashboardData[K],
): DashboardData[] => {
  const isExist = data.some((item) => item.teamId === teamId);

  if (isExist) {
    return data.map((item) =>
      item.teamId === teamId ? { ...item, [fieldKey]: fieldValue } : item,
    );
  }

  return [...data, { teamId, [fieldKey]: fieldValue }];
};

export const useDashboardStore = create<DashboardState>((set) => ({
  dashboardData: [],

  updateTodoStatus: (teamId) => {
    set((state) => ({
      dashboardData: updateDashboardField(
        state.dashboardData,
        teamId,
        'todoStatusData',
        calculateTodoStatus(teamId),
      ),
    }));
  },

  updateFileType: (teamId) => {
    set((state) => ({
      dashboardData: updateDashboardField(
        state.dashboardData,
        teamId,
        'fileTypeData',
        calculateFileType(teamId),
      ),
    }));
  },

  updateTodoTrends: (teamId) => {
    set((state) => ({
      dashboardData: updateDashboardField(
        state.dashboardData,
        teamId,
        'monthlyTodoTrends',
        calculateTodoTrends(teamId),
      ),
    }));
  },

  updateChatActivity: (teamId) => {
    set((state) => ({
      dashboardData: updateDashboardField(
        state.dashboardData,
        teamId,
        'chatActivityByTime',
        calculateChatActivity(teamId),
      ),
    }));
  },

  updateDDaySchedules: (teamId) => {
    set((state) => ({
      dashboardData: updateDashboardField(
        state.dashboardData,
        teamId,
        'dDaySchedules',
        calculateDDaySchedules(teamId),
      ),
    }));
  },

  updateUploadedFiles: (teamId) => {
    set((state) => ({
      dashboardData: updateDashboardField(
        state.dashboardData,
        teamId,
        'recentlyUploadedFiles',
        calculateUploadedFiles(teamId),
      ),
    }));
  },

  updateUploadedTodos: (teamId) => {
    set((state) => ({
      dashboardData: updateDashboardField(
        state.dashboardData,
        teamId,
        'recentlyUploadedTodos',
        calculateUploadedTodos(teamId),
      ),
    }));
  },
}));

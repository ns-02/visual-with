import { useTeamFileStore } from '@features/fileSharing/store/useTeamFileStore';
import { useScheduleStore } from '@features/schedule/store/useScheduleStore';
import { useTodoStore } from '@features/todoList/store/useTodoStore';
import { parseDate, formatTimeAgo } from '@shared/utils/formatDate';
import { create } from 'zustand';
import { differenceInDays } from 'date-fns';
import {
  selectTeamAllChat,
  useTeamChatStore,
} from '@features/teamChat/store/useTeamChatStore';

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
  teamId: string;
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
  updateTodoStatus: (teamId: string) => void;
  updateFileType: (teamId: string) => void;
  updateTodoTrends: (teamId: string) => void;
  updateChatActivity: (teamId: string) => void;
  updateDDaySchedules: (teamId: string) => void;
  updateUploadedFiles: (teamId: string) => void;
  updateUploadedTodos: (teamId: string) => void;
}

const calculateTodoStatus = (teamId: string): TodoStatusData[] => {
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

const calculateFileType = (teamId: string): FileTypeData[] => {
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

const calculateTodoTrends = (teamId: string): MonthlyTodoTrends[] => {
  const completedTodoData = useTodoStore
    .getState()
    .todoData.filter(
      (t) => t.teamId === teamId && t.checked === true && t.completeDate,
    );

  const countByYearMonth = new Map<string, number>();

  for (const todo of completedTodoData) {
    const yearMonth = todo.completeDate!.slice(0, 7);
    countByYearMonth.set(yearMonth, (countByYearMonth.get(yearMonth) ?? 0) + 1);
  }

  return [...countByYearMonth.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([yearMonth, todos]) => ({
      month: `${parseInt(yearMonth.slice(5, 7), 10)}월`,
      todos,
    }));
};

const CHAT_ACTIVITY_TIME_SLOTS = [
  '00-02',
  '02-04',
  '04-06',
  '06-08',
  '08-10',
  '10-12',
  '12-14',
  '14-16',
  '16-18',
  '18-20',
  '20-22',
  '22-00',
] as const;

const parseChatHour = (time: string): number | null => {
  const match = time.match(/^(오전|오후)\s*(\d{1,2}):/);
  if (!match) return null;

  const [, period, hourStr] = match;
  const hour12 = Number(hourStr);
  if (Number.isNaN(hour12) || hour12 < 1 || hour12 > 12) return null;

  if (period === '오전') {
    return hour12 === 12 ? 0 : hour12;
  }

  return hour12 === 12 ? 12 : hour12 + 12;
};

const calculateChatActivity = (teamId: string): ChatActivityByTime[] => {
  const chatData = selectTeamAllChat(teamId)(useTeamChatStore.getState());

  const countBySlot = new Map<string, number>(
    CHAT_ACTIVITY_TIME_SLOTS.map((time) => [time, 0]),
  );

  for (const chat of chatData) {
    const hour = parseChatHour(chat.time);
    if (hour === null) continue;

    const slot = CHAT_ACTIVITY_TIME_SLOTS[Math.floor(hour / 2)];
    if (!slot) continue;

    countBySlot.set(slot, (countBySlot.get(slot) ?? 0) + 1);
  }

  return CHAT_ACTIVITY_TIME_SLOTS.map((time) => ({
    time,
    chats: countBySlot.get(time) ?? 0,
  }));
};

const DASHBOARD_LIST_LIMIT = 5;

const calculateDDaySchedules = (teamId: string): DDaySchedules[] => {
  const scheduleData = useScheduleStore
    .getState()
    .scheduleData.filter((s) => s.teamId === teamId);

  const nowDate = new Date();

  return scheduleData
    .map((item) => {
      const { startDate, finishDate } = item;

      const referenceDate = finishDate
        ? parseDate(finishDate)
        : parseDate(startDate);

      const dateDifference = differenceInDays(referenceDate, nowDate);

      return {
        scheduleId: item.id,
        scheduleTitle: item.title,
        remainingDays: dateDifference,
      };
    })
    .sort((a, b) => a.remainingDays - b.remainingDays)
    .slice(0, DASHBOARD_LIST_LIMIT);
};

const calculateUploadedFiles = (teamId: string): RecentlyUploadedFiles[] => {
  const fileData = useTeamFileStore
    .getState()
    .fileData.filter((t) => t.teamId === teamId);

  return fileData
    .sort(
      (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime(),
    )
    .slice(0, DASHBOARD_LIST_LIMIT)
    .map((item) => ({
      fileId: item.id,
      fileName: item.fileName,
      timeAgo: formatTimeAgo(item.date),
    }));
};

const getTodoCreatedTimestamp = (todo: {
  id: number;
  createdDate?: string;
  createdTime?: string;
}): number => {
  if (!todo.createdDate) return todo.id;

  const createdAt = todo.createdTime
    ? parseDate(`${todo.createdDate}T${todo.createdTime}`)
    : parseDate(todo.createdDate);

  return createdAt.getTime();
};

const calculateUploadedTodos = (teamId: string): RecentlyUploadedTodos[] => {
  const todoData = useTodoStore
    .getState()
    .todoData.filter((t) => t.teamId === teamId);

  return todoData
    .sort(
      (a, b) => getTodoCreatedTimestamp(b) - getTodoCreatedTimestamp(a),
    )
    .slice(0, DASHBOARD_LIST_LIMIT)
    .map((item) => ({
      todoId: item.id,
      todoTitle: item.title,
      timeAgo: formatTimeAgo(item.createdDate, item.createdTime),
    }));
};

const updateDashboardField = <K extends keyof Omit<DashboardData, 'teamId'>>(
  data: DashboardData[],
  teamId: string,
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

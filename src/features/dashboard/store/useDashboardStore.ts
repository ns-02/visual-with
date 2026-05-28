import { useTodoStore } from '@features/todoList/store/useTodoStore';
import { TeamId } from '@shared/models/Workspace';
import { create } from 'zustand';

interface TodoStatusData {
  name: '완료된 할 일' | '남은 할 일';
  value: number;
}

interface DashboardData {
  teamId: TeamId;
  todoStatusData: TodoStatusData[];
}

interface DashboardState {
  dashboardData: DashboardData[];
  updateDashboard: (teamId: TeamId) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  dashboardData: [],

  updateDashboard: (teamId) => {
    const todoData = useTodoStore
      .getState()
      .todoData.filter((t) => t.teamId === teamId);

    const completedTodoCount = todoData.filter((t) => t.checked).length;
    const progressTodoCount = todoData.length - completedTodoCount;

    const newTodoStatusData: TodoStatusData[] = [
      { name: '완료된 할 일', value: completedTodoCount },
      { name: '남은 할 일', value: progressTodoCount },
    ];

    set((state) => {
      const isExist = state.dashboardData.some(
        (item) => item.teamId === teamId,
      );

      if (!isExist) {
        return {
          dashboardData: [
            ...state.dashboardData,
            {
              teamId,
              todoStatusData: newTodoStatusData,
            },
          ],
        };
      }

      return {
        dashboardData: state.dashboardData.map((item) =>
          item.teamId === teamId
            ? {
                ...item,
                todoStatusData: newTodoStatusData,
              }
            : item,
        ),
      };
    });
  },
}));

import { useRouteManager } from '@core/routes/useRouteManager';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useTeamChatStore } from '@features/chat/store/useTeamChatStore';
import { useDirectChatStore } from '@features/chat/store/useDirectChatStore';
import { useDashboardStore } from '@features/dashboard/store/useDashboardStore';
import { useDirectFileStore } from '@features/file/store/useDirectFileStore';
import { useTeamFileStore } from '@features/file/store/useTeamFileStore';
import { useFriendStore } from '@features/friendList/store/useFriendStore';
import { useScheduleStore } from '@features/schedule/store/useScheduleStore';
import { useSettingsStore } from '@features/settings/store/useSettingsStore';
import { useTodoStore } from '@features/todoList/store/useTodoStore';
import { clearByPrefix } from '@shared/utils/sessionStorage';

export const useLogout = () => {
  const logoutUser = useUserStore((state) => state.logout);
  const { goHome } = useRouteManager();

  return () => {
    useTeamChatStore.getState().reset();
    useWorkspaceStore.getState().reset();
    useFriendStore.getState().reset();
    useDirectChatStore.getState().reset();
    useTeamFileStore.getState().reset();
    useDirectFileStore.getState().reset();
    useScheduleStore.getState().reset();
    useTodoStore.getState().reset();
    useDashboardStore.getState().reset();
    clearByPrefix('directChats_');
    useSettingsStore.getState().resetPushSettings();
    logoutUser();
    goHome();
  };
};

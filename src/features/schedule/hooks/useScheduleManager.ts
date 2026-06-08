import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';
import { useUserStore } from '@core/store/useUserStore';
import { useEffect, useMemo } from 'react';
import { formatDate, formatTime } from '@shared/utils/formatDate';
import { useScheduleStore } from '../store/useScheduleStore';
import {
  addScheduleFetch,
  deleteScheduleFetch,
  updateScheduleFetch,
  viewSchedule,
} from '@shared/api/Schedule/ScheduleApi';
import { ScheduleData } from '@shared/models/Workspace';

export const useScheduleManager = () => {
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const { currentRule, teamId } = useCurrentWorkspace();

  const scheduleData = useScheduleStore((state) => state.scheduleData);

  const teamScheduleData = useMemo(
    () => scheduleData.filter((item) => item.teamId === teamId),
    [scheduleData, teamId],
  );

  const loadSchedule = useScheduleStore((state) => state.loadSchedule);
  const addSchedule = useScheduleStore((state) => state.addSchedule);
  const updateSchedule = useScheduleStore((state) => state.updateSchedule);
  const deleteSchedule = useScheduleStore((state) => state.deleteSchedule);
  // loadSchedule 추가

  useEffect(() => {
    const loadScheduleData = async () => {
      if (!teamId) return;

      const fetchData = await viewSchedule({ teamId });

      if (!fetchData || fetchData.length === 0) return;

      const newScheduleData: ScheduleData[] = fetchData.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.content,
        startDate: item.startDate,
        startTime: item.startTime,
        finishDate: item.completeDate,
        finishTime: item.completeTime,
        teamId,
        authorId: item.userId,
        authorName: '아무개',
      }));

      loadSchedule(newScheduleData, teamId);
    };

    loadScheduleData();
  }, [teamId, loadSchedule]);

  const addScheduleInManager = async ({
    title,
    description,
    startDate,
    startTime,
    finishDate,
    finishTime,
    isAllDay,
  }: {
    title: string;
    description: string;
    startDate: string;
    startTime: string;
    finishDate?: string;
    finishTime?: string;
    isAllDay: boolean;
  }) => {
    if (!title || !startDate || !startTime || !teamId || !userId || !userName)
      return;

    const fetchData = await addScheduleFetch({
      title,
      content: description || '',
      teamId: teamId,
      userId: userId,
      createdDate: formatDate(),
      createdTime: formatTime(),
      startDate,
      startTime,
      completeDate: finishDate || '',
      completeTime: finishTime || '',
      wholeDay: isAllDay,
    });

    addSchedule({
      id: fetchData.id,
      teamId: teamId,
      title,
      description: description || undefined,
      authorId: userId,
      authorName: userName,
      startDate,
      startTime,
      finishDate: finishDate || undefined,
      finishTime: finishTime || undefined,
    });
  };

  const updateScheduleInManager = async ({
    title,
    description,
    scheduleId,
    authorId,
    authorName,
    startDate,
    startTime,
    finishDate,
    finishTime,
    isAllDay,
  }: {
    title: string;
    description: string;
    scheduleId: number | undefined;
    authorId: string | undefined;
    authorName: string | undefined;
    startDate: string;
    startTime: string;
    finishDate?: string;
    finishTime?: string;
    isAllDay: boolean;
  }) => {
    if (!title || !scheduleId || !authorId || !authorName || !teamId) return;

    await updateScheduleFetch({
      id: scheduleId,
      title,
      content: description || '',
      teamId,
      userId: authorId,
      userTeamRole: currentRule,
      startDate,
      startTime,
      completeDate: finishDate || '',
      completeTime: finishTime || '',
      wholeDay: isAllDay,
    });

    updateSchedule({
      id: scheduleId,
      title,
      description: description || undefined,
      authorId,
      authorName,
      startDate,
      startTime,
      finishDate: finishDate || undefined,
      finishTime: finishTime || undefined,
    });
  };

  const deleteScheduleInManager = async (scheduleId: number | undefined) => {
    if (!scheduleId || !teamId || !userId) return;

    deleteScheduleFetch({
      id: scheduleId,
      teamId,
      userId,
      userTeamRole: currentRule,
    });

    deleteSchedule(scheduleId);
  };

  return {
    teamScheduleData,
    addScheduleInManager,
    updateScheduleInManager,
    deleteScheduleInManager,
  };
};

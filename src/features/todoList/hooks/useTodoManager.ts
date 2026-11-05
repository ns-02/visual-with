import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';
import { useUserStore } from '@core/store/useUserStore';
import { useTodoStore } from '../store/useTodoStore';
import { useEffect, useMemo, useRef } from 'react';
import { toast } from '@core/store/useToastStore';
import { TodoData } from '@shared/models/Workspace';
import { getIsPermit } from '@shared/utils/permitUtils';
import {
  addTodoFetch,
  deleteTodoFetch,
  updateTodoCompleteFetch,
  updateTodoContentFetch,
  viewTodo,
} from '@shared/api/todo/TodoApi';
import { formatDate, formatTime } from '@shared/utils/formatDate';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';

export const useTodoManager = (shouldLoad = false) => {
  const pendingToggles = useRef(new Set<number>());
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const { currentRule, teamId } = useCurrentWorkspace();

  const todoData = useTodoStore((state) => state.todoData);
  const progressData = useMemo(
    () => todoData.filter((item) => item.teamId === teamId && !item.checked),
    [todoData, teamId],
  );
  const completedData = useMemo(
    () => todoData.filter((item) => item.teamId === teamId && item.checked),
    [todoData, teamId],
  );

  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const loadTodo = useTodoStore((state) => state.loadTodo);
  const addTodo = useTodoStore((state) => state.addTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const membershipData = useWorkspaceStore((state) => state.membershipData);

  useEffect(() => {
    if (!shouldLoad || !teamId) return;
    let active = true;
    const initialData = useTodoStore.getState().todoData;

    const loadTodoData = async () => {
      try {
        const fetchData = await viewTodo({ teamId });
        if (!active || useTodoStore.getState().todoData !== initialData) return;
        if (!Array.isArray(fetchData)) throw new Error('잘못된 응답');
        const currentMembershipData = membershipData.filter(
          (m) => m.teamId === teamId,
        );

        const newTodoData: TodoData[] = fetchData.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.content,
          checked: item.completed,
          teamId,
          authorId: item.userId,
          authorName:
            currentMembershipData.find((m) => m.userId === item.userId)
              ?.userName ?? '',
          createdDate: item.createdDate,
          createdTime: item.createdTime,
          completeDate: item.completeDate,
          completeTime: item.completeTime,
        }));

        loadTodo(newTodoData, teamId);
      } catch {
        if (active) toast.error('할 일 목록을 불러오지 못했습니다.');
      }
    };

    void loadTodoData();
    return () => {
      active = false;
    };
  }, [teamId, loadTodo, membershipData, shouldLoad]);

  const getCanToggle = (authorId: string) =>
    getIsPermit({
      authorId,
      userId,
      rule: currentRule,
    });

  const updateTodoComplete = async (item: TodoData) => {
    if (!teamId) return;

    const canToggle = getCanToggle(item.authorId);

    if (!canToggle || pendingToggles.current.has(item.id)) return;
    pendingToggles.current.add(item.id);

    try {
      await updateTodoCompleteFetch({
        id: item.id,
        teamId,
        userId: item.authorId,
        complete: !item.checked,
        completeDate: formatDate(),
        completeTime: formatTime(),
        userTeamRole: currentRule,
      });

      toggleTodo(item.id);
    } catch {
      toast.error('할 일 완료 상태를 변경하지 못했습니다.');
    } finally {
      pendingToggles.current.delete(item.id);
    }
  };

  const addTodoInManager = async (title: string, description: string) => {
    if (!title || !teamId || !userId || !userName) return;

    const createdDate = formatDate();
    const createdTime = formatTime();

    const fetchData = await addTodoFetch({
      title,
      content: description || '',
      teamId: teamId,
      userId: userId,
      createdDate,
      createdTime,
    });

    addTodo({
      id: fetchData.id,
      title,
      description: description || undefined,
      teamId: teamId,
      authorId: userId,
      authorName: userName,
      createdDate,
      createdTime,
    });
    return true;
  };

  const updateTodoInManager = async ({
    title,
    description,
    todoId,
    authorId,
    authorName,
  }: {
    title: string;
    description: string;
    todoId: number | undefined;
    authorId: string | undefined;
    authorName: string | undefined;
  }) => {
    if (!title || !todoId || !authorId || authorName === undefined || !teamId)
      return;

    await updateTodoContentFetch({
      id: todoId,
      title,
      content: description || '',
      teamId,
      userId: authorId,
      userTeamRole: currentRule,
    });

    updateTodo({
      id: todoId,
      title,
      description: description || undefined,
      authorId,
      authorName,
    });
    return true;
  };

  const deleteTodoInManager = async (todoId: number | undefined) => {
    if (!todoId || !teamId || !userId) return;

    await deleteTodoFetch({
      id: todoId,
      teamId,
      userId,
      userTeamRole: currentRule,
    });

    deleteTodo(todoId);
    return true;
  };

  return {
    progressData,
    completedData,
    getCanToggle,
    updateTodoComplete,
    addTodoInManager,
    updateTodoInManager,
    deleteTodoInManager,
  };
};

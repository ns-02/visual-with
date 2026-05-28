import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';
import { useUserStore } from '@core/store/useUserStore';
import { useTodoStore } from '../store/useTodoStore';
import { useEffect, useMemo } from 'react';
import { TodoData } from '@shared/models/Workspace';
import { getIsPermit } from '@shared/utils/permitUtils';
import {
  addTodoFetch,
  deleteTodoFetch,
  updateTodoCompleteFetch,
  updateTodoContentFetch,
  viewTodo,
} from '@shared/api/api';

export const useTodoManager = () => {
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

  useEffect(() => {
    const loadTodoData = async () => {
      if (!teamId) return;

      const fetchData = await viewTodo({ teamId });
      console.log(fetchData);

      if (!fetchData || fetchData.length === 0) return;

      const newTodoData: TodoData[] = fetchData.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.content,
        checked: item.completed,
        teamId,
        authorId: item.userId,
        authorName: '아무개',
      }));

      loadTodo(newTodoData, teamId);
    };

    loadTodoData();
  }, [teamId, loadTodo]);

  const getCanToggle = (authorId: string) =>
    getIsPermit({
      authorId,
      userId,
      rule: currentRule,
    });

  const updateTodoComplete = async (item: TodoData) => {
    if (!teamId) return;

    const canToggle = getCanToggle(item.authorId);

    if (!canToggle) return;

    await updateTodoCompleteFetch({
      id: item.id,
      teamId,
      userId: item.authorId,
      complete: !item.checked,
      completeDate: '날짜',
      completeTime: '시간',
      userTeamRole: currentRule,
    });

    toggleTodo(item.id);
  };

  const addTodoInManager = async (title: string, description: string) => {
    if (!title || !teamId || !userId || !userName) return;

    const fetchData = await addTodoFetch({
      title,
      content: description || '',
      teamId: teamId,
      userId: userId,
      createdDate: '날짜',
      createdTime: '시간',
    });

    addTodo({
      id: fetchData.id,
      title,
      description: description || undefined,
      teamId: teamId,
      authorId: userId,
      authorName: userName,
    });
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
    if (!title || !todoId || !authorId || !authorName || !teamId) return;

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
  };

  const deleteTodoInManager = async (todoId: number | undefined) => {
    if (!todoId || !teamId || !userId) return;

    deleteTodoFetch({
      id: todoId,
      teamId,
      userId,
      userTeamRole: currentRule,
    });

    deleteTodo(todoId);
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

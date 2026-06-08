import { request } from '../baseApi';
import {
  ViewTodoRequest,
  ViewTodoResponse,
  AddTodoRequest,
  AddTodoResponse,
  UpdateTodoContentRequest,
  UpdateTodoCompleteRequest,
  DeleteTodoRequest,
} from './TodoModel';

export const viewTodo = async ({
  teamId,
}: ViewTodoRequest): Promise<ViewTodoResponse[]> => {
  return await request(`/api/todo/${teamId}`, {
    method: 'GET',
  });
};

export const addTodoFetch = async (
  addRequest: AddTodoRequest,
): Promise<AddTodoResponse> => {
  return await request(`/api/todo`, {
    method: 'POST',
    body: JSON.stringify(addRequest),
  });
};

export const updateTodoContentFetch = async (
  updateRequest: UpdateTodoContentRequest,
): Promise<void> => {
  return await request(`/api/todo/update`, {
    method: 'PUT',
    body: JSON.stringify(updateRequest),
  });
};

export const updateTodoCompleteFetch = async (
  updateRequest: UpdateTodoCompleteRequest,
): Promise<void> => {
  return await request(`/api/todo/complete`, {
    method: 'PUT',
    body: JSON.stringify(updateRequest),
  });
};

export const deleteTodoFetch = async (
  deleteRequest: DeleteTodoRequest,
): Promise<void> => {
  return await request(`/api/todo/delete`, {
    method: 'DELETE',
    body: JSON.stringify(deleteRequest),
  });
};

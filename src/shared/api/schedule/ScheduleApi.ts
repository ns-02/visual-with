import { request } from '../baseApi';
import {
  ViewScheduleRequest,
  ViewScheduleResponse,
  AddScheduleRequest,
  AddScheduleResponse,
  UpdateScheduleRequest,
  DeleteScheduleRequest,
} from './ScheduleModel';

export const viewSchedule = async ({
  teamId,
}: ViewScheduleRequest): Promise<ViewScheduleResponse[]> => {
  return await request(`/api/cal/${teamId}`, {
    method: 'GET',
  });
};

export const addScheduleFetch = async (
  addRequest: AddScheduleRequest,
): Promise<AddScheduleResponse> => {
  return await request(`/api/cal`, {
    method: 'POST',
    body: JSON.stringify(addRequest),
  });
};

export const updateScheduleFetch = async (
  updateRequest: UpdateScheduleRequest,
): Promise<void> => {
  return await request(`/api/cal`, {
    method: 'PUT',
    body: JSON.stringify(updateRequest),
  });
};

export const deleteScheduleFetch = async (
  deleteRequest: DeleteScheduleRequest,
): Promise<void> => {
  return await request(`/api/cal`, {
    method: 'DELETE',
    body: JSON.stringify(deleteRequest),
  });
};

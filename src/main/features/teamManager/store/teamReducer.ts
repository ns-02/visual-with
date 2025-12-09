import { TeamData, TeamId, TeamName } from '@models/Team';
import getMaxId from '@utils/getMaxId';

export type TeamAction =
  | { type: 'CREATE_TEAM'; payload: { name: TeamName } }
  | { type: 'DELETE_TEAM'; payload: { id: TeamId } };

export default function teamReducer(state: TeamData[], action: TeamAction) {
  switch (action.type) {
    case 'CREATE_TEAM': {
      const id = getMaxId(state) + 1;
      const { name } = action.payload;
      const newTeamData: TeamData = { id, name };
      return [...state, newTeamData];
    }

    case 'DELETE_TEAM': {
      const { id } = action.payload;
      const nextTeamData: TeamData[] = state.filter(
        (item) => item.id !== id && item,
      );
      return nextTeamData;
    }
  }
}

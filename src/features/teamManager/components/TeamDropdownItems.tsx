import type { SetStateAction } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Trash2 } from 'lucide-react';
import { Button, Item } from '@shared/components';
import styles from './TeamDropdownItems.module.css';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { TeamData } from '@shared/models/Workspace';
import { useUserStore } from '@core/store/useUserStore';

interface TeamDropdownItemsType {
  deleteTeamDialogOpen: (value: SetStateAction<boolean>) => void;
  setDeleteTeamData: (teamData: TeamData) => void;
  onTeamSwitch: (teamId: string) => void;
}

const TeamDropdownItems = ({
  deleteTeamDialogOpen,
  setDeleteTeamData,
  onTeamSwitch,
}: TeamDropdownItemsType) => {
  const userId = useUserStore((state) => state.user?.id);
  const teamData = useWorkspaceStore((state) => state.teamData);
  const membershipData = useWorkspaceStore((state) => state.membershipData);
  const { teamId } = useWorkspaceParams();

  const joinedTeamIds = membershipData
    .filter((m) => m.status === 'ACCEPTED' && m.userId === userId)
    .map((m) => m.teamId);

  const displayTeamData = teamData.filter((team) =>
    joinedTeamIds.includes(team.id),
  );

  const handleItemSelected = (item: TeamData) => {
    return item.id === teamId ? true : false;
  };

  if (displayTeamData.length === 0) {
    return null;
  }

  return (
    <>
      {displayTeamData.map((item) => {
        return (
          <DropdownMenu.Item
            key={item.id}
            onClick={() => {
              onTeamSwitch(item.id);
            }}
          >
            <Item
              type='list'
              text={item.name}
              selected={handleItemSelected(item)}
            >
              <Button
                variant='content'
                onClick={() => {
                  setDeleteTeamData(item);
                  deleteTeamDialogOpen(true);
                }}
              >
                <Trash2 size={16} />
              </Button>
            </Item>
          </DropdownMenu.Item>
        );
      })}
      <DropdownMenu.Separator className={styles.separator} />
    </>
  );
};

export default TeamDropdownItems;

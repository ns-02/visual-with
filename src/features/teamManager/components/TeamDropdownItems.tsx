import type { SetStateAction } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Trash2 } from 'lucide-react';
import { Button, Item } from '@shared/components';
import styles from './TeamDropdownItems.module.css';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { TeamData } from '@shared/models/Workspace';

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
  const teamData = useWorkspaceStore((state) => state.teamData);
  const { teamId } = useWorkspaceParams();
  const setSelectTeam = useWorkspaceStore((state) => state.setSelectTeam);

  const handleItemSelected = (item: TeamData) => {
    return item.id === teamId ? true : false;
  };

  if (teamData.length === 0) {
    return null;
  }

  return (
    <>
      {teamData.map((item) => {
        return (
          <DropdownMenu.Item
            key={item.id}
            onClick={() => {
              setSelectTeam(item.id);
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

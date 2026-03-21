import type { SetStateAction } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Trash2 } from 'lucide-react';
import { ContentButton, Item } from '@shared/components/ui';
import { TeamData } from '@shared/models/Team';
import { useTeamManager } from '../hooks/useTeamManager';
import styles from './TeamDropdownItems.module.css';
import { useTeamStore } from '@core/store/useTeamStore';

interface TeamDropdownItemsType {
  deleteTeamDialogOpen: (value: SetStateAction<boolean>) => void;
  setDeleteTeamData: (teamData: TeamData) => void;
}

const TeamDropdownItems = ({
  deleteTeamDialogOpen,
  setDeleteTeamData,
}: TeamDropdownItemsType) => {
  const teamData = useTeamStore((state) => state.teamData);
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
  const { selectTeam } = useTeamManager();

  const handleItemSelected = (item: TeamData) => {
    return item.id === selectTeamId ? true : false;
  };

  if (teamData.length === 0) {
    return null;
  }

  return (
    <>
      {teamData.map((item) => {
        return (
          <DropdownMenu.Item key={item.id} onClick={() => selectTeam(item)}>
            <Item
              type='list'
              text={item.name}
              selected={handleItemSelected(item)}
            >
              <ContentButton
                onCustomClick={() => {
                  setDeleteTeamData(item);
                  deleteTeamDialogOpen(true);
                }}
              >
                <Trash2 size={16} />
              </ContentButton>
            </Item>
          </DropdownMenu.Item>
        );
      })}
      <DropdownMenu.Separator className={styles.separator} />
    </>
  );
};

export default TeamDropdownItems;

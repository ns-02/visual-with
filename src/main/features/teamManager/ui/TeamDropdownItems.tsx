import React from 'react';
import { DropdownMenu } from 'radix-ui';
import { Trash2 } from 'lucide-react';
import { ContentButton, Item } from '@components/ui';
import { useTeam } from '@core/context/TeamContext';
import { TeamData } from '@models/Team';
import useTeamManager from '../hooks/useTeamManager';
import styles from './TeamDropdownItems.module.css';

interface TeamDropdownItemsType {
  deleteTeamDialogOpen: (value: React.SetStateAction<boolean>) => void;
  setDeleteTeamData: (teamData: TeamData) => void;
}

const TeamDropdownItems = ({
  deleteTeamDialogOpen,
  setDeleteTeamData,
}: TeamDropdownItemsType) => {
  const { teamData, selectTeamId } = useTeam();
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

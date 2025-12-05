import React from 'react';
import { DropdownMenu } from 'radix-ui';
import { Trash2 } from 'lucide-react';
import { Button, Item } from '@components/ui';
import styles from './TeamDropdownItems.module.css';
import { useTeam } from '@context/TeamContext';
import { TeamData } from '@models/Team';

interface TeamDropdownItemsType {
  deleteTeamDialogOpen: (value: React.SetStateAction<boolean>) => void;
  DeleteTeamData: (teamData: TeamData) => void;
}

const TeamDropdownItems = ({
  deleteTeamDialogOpen,
  DeleteTeamData,
}: TeamDropdownItemsType) => {
  const {
    teamData,
    selectTeamId,
    setSelectTeamId,
    setSelectTeamName,
    setIsTeamMember,
  } = useTeam();

  const handleItemClick = (item: TeamData) => {
    if (item) setIsTeamMember(true);
    setSelectTeamId(item.id);
    setSelectTeamName(item.name);
  };

  const handleItemSelected = (item: TeamData) => {
    return item.id === selectTeamId ? true : false;
  };

  if (!teamData) {
    return null;
  }

  return (
    <>
      {teamData.map((item) => {
        return (
          <DropdownMenu.Item
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            <Item
              type='list'
              text={item.name}
              selected={handleItemSelected(item)}
            >
              <Button
                onCustomClick={() => {
                  DeleteTeamData(item);
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

import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Trash2 } from 'lucide-react';
import { Button, Item } from '@components/ui';
import { useTeam } from '@context/TeamContext';
import { Dropdown } from '@components/ui';
import { TeamData } from '@models/Team';
import CreateTeamDialog from '../dialogs/CreateTeamDialog';
import DeleteTeamDialog from '../dialogs/DeleteTeamDialog';
import { DropdownProps } from '..';
import styles from './SelectTeamDropdown.module.css';

const SelectTeamDropdown = ({ triggerElement }: DropdownProps) => {
  const { teamData, setTeamData, setSelectTeamData, setIsTeamMember } =
    useTeam();
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);

  const [currentItemId, setcurrentItemId] = useState(1);
  const [deleteTeamData, setDeleteTeamData] = useState<TeamData | undefined>(
    undefined,
  );

  const handleCreateTeam = (teamName: string) => {
    const newData = { id: currentItemId, name: teamName };
    const nextTeamData = teamData ? [...teamData, newData] : [newData];

    setTeamData(nextTeamData);
    setcurrentItemId(currentItemId + 1);
  };

  const handleDeleteTeam = () => {
    const nextTeamData = teamData?.filter(
      (item) => item.id !== deleteTeamData?.id && item,
    );
    setTeamData(nextTeamData);
    if (!nextTeamData?.length) setIsTeamMember(false);
  };

  const handleItemClick = (item: TeamData) => {
    if (item) setIsTeamMember(true);
    setSelectTeamData(item);
  };

  const dropdownContent = (
    <>
      {teamData && (
        <>
          {teamData.map((item) => {
            return (
              <DropdownMenu.Item
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <Item type='list' text={item.name}>
                  <Button
                    onCustomClick={() => {
                      setDeleteTeamData(item);
                      setIsDeleteTeamDialogOpen(true);
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
      )}
      <DropdownMenu.Item
        onSelect={() => setIsCreateTeamDialogOpen(true)}
        asChild
      >
        <Item type='add' text='팀 생성' />
      </DropdownMenu.Item>
    </>
  );

  return (
    <>
      <Dropdown trigger={triggerElement} content={dropdownContent} />
      <CreateTeamDialog
        open={isCreateTeamDialogOpen}
        onOpenChange={setIsCreateTeamDialogOpen}
        onCreate={handleCreateTeam}
      />
      <DeleteTeamDialog
        open={isDeleteTeamDialogOpen}
        onOpenChange={setIsDeleteTeamDialogOpen}
        onDelete={handleDeleteTeam}
        deleteTeamData={deleteTeamData}
      />
    </>
  );
};

export default SelectTeamDropdown;

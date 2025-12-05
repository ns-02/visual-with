import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Trash2 } from 'lucide-react';
import { Button, Item } from '@components/ui';
import { useTeam } from '@context/TeamContext';
import { Dropdown } from '@components/ui';
import { TeamData } from '@models/Team';
import CreateTeamDialog from '../dialogs/CreateTeamDialog';
import DeleteTeamDialog from '../dialogs/DeleteTeamDialog';
import useTeamManager from '../hooks/useTeamManager';
import styles from './TeamDropdown.module.css';

interface DropdownProps {
  triggerElement?: React.ReactNode;
}

const TeamDropdown = ({ triggerElement }: DropdownProps) => {
  const {
    teamData,
    selectTeamId,
    setSelectTeamId,
    setSelectTeamName,
    setIsTeamMember,
  } = useTeam();

  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);
  const { deleteTeamName, CreateTeam, DeleteTeam, DeleteTeamData } =
    useTeamManager({
      teamData,
    });

  const handleItemClick = (item: TeamData) => {
    if (item) setIsTeamMember(true);
    setSelectTeamId(item.id);
    setSelectTeamName(item.name);
  };

  const handleItemSelected = (item: TeamData) => {
    return item.id === selectTeamId ? true : false;
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
                <Item
                  type='list'
                  text={item.name}
                  selected={handleItemSelected(item)}
                >
                  <Button
                    onCustomClick={() => {
                      DeleteTeamData(item);
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
      <Dropdown trigger={triggerElement} items={dropdownContent} />
      <CreateTeamDialog
        open={isCreateTeamDialogOpen}
        onOpenChange={setIsCreateTeamDialogOpen}
        onCreate={CreateTeam}
      />
      <DeleteTeamDialog
        open={isDeleteTeamDialogOpen}
        onOpenChange={setIsDeleteTeamDialogOpen}
        onDelete={DeleteTeam}
        deleteTeamName={deleteTeamName}
      />
    </>
  );
};

export default TeamDropdown;

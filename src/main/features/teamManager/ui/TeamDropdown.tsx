import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { useTeam } from '@context/TeamContext';
import { Dropdown, Item } from '@components/ui';
import CreateTeamDialog from '../dialogs/CreateTeamDialog';
import DeleteTeamDialog from '../dialogs/DeleteTeamDialog';
import useTeamManager from '../hooks/useTeamManager';
import TeamDropdownItems from './TeamDropdownItems';

interface DropdownProps {
  triggerElement?: React.ReactNode;
}

const TeamDropdown = ({ triggerElement }: DropdownProps) => {
  const { teamData } = useTeam();

  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);
  const { deleteTeamName, createTeam, deleteTeam, setDeleteTeamData } =
    useTeamManager({
      teamData,
    });

  const dropdownItems = (
    <>
      <TeamDropdownItems
        deleteTeamDialogOpen={setIsDeleteTeamDialogOpen}
        setDeleteTeamData={setDeleteTeamData}
      />
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
      <Dropdown trigger={triggerElement} items={dropdownItems} />
      <CreateTeamDialog
        open={isCreateTeamDialogOpen}
        onOpenChange={setIsCreateTeamDialogOpen}
        onCreate={createTeam}
      />
      <DeleteTeamDialog
        open={isDeleteTeamDialogOpen}
        onOpenChange={setIsDeleteTeamDialogOpen}
        onDelete={deleteTeam}
        deleteTeamName={deleteTeamName}
      />
    </>
  );
};

export default TeamDropdown;

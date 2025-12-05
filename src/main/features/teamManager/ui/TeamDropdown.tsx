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
  const { deleteTeamName, CreateTeam, DeleteTeam, DeleteTeamData } =
    useTeamManager({
      teamData,
    });

  const dropdownItems = (
    <>
      <TeamDropdownItems
        deleteTeamDialogOpen={setIsDeleteTeamDialogOpen}
        DeleteTeamData={DeleteTeamData}
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

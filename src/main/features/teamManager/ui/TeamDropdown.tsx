import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Dropdown, Item } from '@components/ui';
import CreateTeamDialog from '../dialogs/CreateTeamDialog';
import DeleteTeamDialog from '../dialogs/DeleteTeamDialog';
import TeamDropdownItems from './TeamDropdownItems';
import { TeamData } from '@models/Team';

interface DropdownProps {
  triggerElement?: React.ReactNode;
}

const TeamDropdown = ({ triggerElement }: DropdownProps) => {
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);
  const [deleteTeamData, setDeleteTeamData] = useState<TeamData>();

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
      />
      <DeleteTeamDialog
        deleteTeamData={deleteTeamData}
        open={isDeleteTeamDialogOpen}
        onOpenChange={setIsDeleteTeamDialogOpen}
      />
    </>
  );
};

export default TeamDropdown;

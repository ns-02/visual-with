import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { AddItem, Dropdown } from '@shared/components';
import CreateTeamDialog from './CreateTeamDialog';
import DeleteTeamDialog from './DeleteTeamDialog';
import TeamDropdownItems from './TeamDropdownItems';
import { TeamData } from '@shared/models/Workspace';

interface DropdownProps {
  trigger?: React.ReactNode;
  onTeamSwitch: (teamId: string) => void;
}

const TeamDropdown = ({ trigger, onTeamSwitch }: DropdownProps) => {
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);
  const [deleteTeamData, setDeleteTeamData] = useState<TeamData>();

  return (
    <>
      <Dropdown trigger={trigger}>
        <TeamDropdownItems
          deleteTeamDialogOpen={setIsDeleteTeamDialogOpen}
          setDeleteTeamData={setDeleteTeamData}
          onTeamSwitch={onTeamSwitch}
        />
        <DropdownMenu.Item
          onSelect={() => setIsCreateTeamDialogOpen(true)}
          asChild
        >
          <AddItem text='팀 생성' />
        </DropdownMenu.Item>
      </Dropdown>

      {isCreateTeamDialogOpen && (
        <CreateTeamDialog
          open={isCreateTeamDialogOpen}
          onOpenChange={setIsCreateTeamDialogOpen}
        />
      )}
      {isDeleteTeamDialogOpen && (
        <DeleteTeamDialog
          deleteTeamData={deleteTeamData}
          open={isDeleteTeamDialogOpen}
          onOpenChange={setIsDeleteTeamDialogOpen}
        />
      )}
    </>
  );
};

export default TeamDropdown;

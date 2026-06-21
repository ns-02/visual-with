import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { AddItem, Button, Dropdown, ListItem } from '@shared/components';
import CreateTeamDialog from './CreateTeamDialog';
import DeleteTeamDialog from './DeleteTeamDialog';
import { TeamData } from '@shared/models/Workspace';
import { Trash2 } from 'lucide-react';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';
import styles from './TeamDropdown.module.css';

interface DropdownProps {
  trigger?: React.ReactNode;
  onTeamSwitch: (teamId: string) => void;
}

const TeamDropdown = ({ trigger, onTeamSwitch }: DropdownProps) => {
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);
  const [deleteTeamData, setDeleteTeamData] = useState<TeamData>();

  const userId = useUserStore((state) => state.user?.id);
  const teamData = useWorkspaceStore((state) => state.teamData);
  const membershipData = useWorkspaceStore((state) => state.membershipData);
  const { teamId, currentRule } = useCurrentWorkspace();

  const joinedTeamIds = membershipData
    .filter((m) => m.status === 'ACCEPTED' && m.userId === userId)
    .map((m) => m.teamId);

  const displayTeamData = teamData.filter((team) =>
    joinedTeamIds.includes(team.id),
  );

  const handleItemSelected = (item: TeamData) => {
    return item.id === teamId ? true : false;
  };

  return (
    <>
      <Dropdown trigger={trigger}>
        {displayTeamData.map((item) => {
          return (
            <DropdownMenu.Item
              key={item.id}
              onClick={() => {
                onTeamSwitch(item.id);
              }}
            >
              <ListItem text={item.name} selected={handleItemSelected(item)}>
                {currentRule === 'ADMIN' && (
                  <Button
                    variant='content'
                    onClick={() => {
                      setDeleteTeamData(item);
                      setIsDeleteTeamDialogOpen(true);
                    }}
                  >
                    <Trash2 size={16} />
                  </Button>
                )}
              </ListItem>
            </DropdownMenu.Item>
          );
        })}
        <DropdownMenu.Separator className={styles.separator} />
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

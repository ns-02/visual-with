import { useState } from "react";
import { DropdownMenu } from "radix-ui";
import { useTeam } from "../../../../context/TeamContext";
import Dropdown from "../../../../components/Dropdown";
import CreateTeamDialog from "../dialogs/CreateTeamDialog";
import Item from "../../../../components/ui/Item";
import Button from "../../../../components/ui/Button";
import styles from "../../../../components/Dropdown.module.css";
import { Trash2 } from "lucide-react";
import DeleteTeamDialog from "../dialogs/DeleteTeamDialog";
import { DropdownProps, TeamItem } from "../types";

const SelectTeamDropdown = ({ triggerElement }: DropdownProps) => {
  const { teamData, setTeamData, setSelectTeamData, setIsTeamMember } = useTeam();
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);

  const [currentItemId, setcurrentItemId] = useState(1);
  const [deleteTeamName, setDeleteTeamName] = useState("");

  const handleCreateTeam = (teamName: string) => {
    const newData = { id: currentItemId, name: teamName };
    const nextTeamData = teamData ? [...teamData, newData] : [newData];
 
    setTeamData(nextTeamData);
    setcurrentItemId(currentItemId + 1);
  };

  const handleItemClick = (item: TeamItem) => {
    if (item) setIsTeamMember(true);
    setSelectTeamData(item);
  };

  const handleDeleteButtonClick = (teamName: string) => {
    setDeleteTeamName(teamName);
    setIsDeleteTeamDialogOpen(true);
  };
  
  const dropdownContent = (
    <>
      {
        teamData && (
        <>
          {
            teamData.map((item) => {
              return (
                <DropdownMenu.Item key={item.id} onClick={() => handleItemClick(item)}>
                  <Item type="list" text={item.name}>
                    <Button onCustomClick={() => handleDeleteButtonClick(item.name)}>
                      <Trash2 size={16} />
                    </Button>
                  </Item>
                </DropdownMenu.Item>
              )
            })
          }
          <DropdownMenu.Separator className={styles.separator} />
        </>
        )
      }
      <DropdownMenu.Item
        onSelect={() => setIsCreateTeamDialogOpen(true)}
        asChild
      >
        <Item type="add" text="팀 생성" />
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
        deleteTeamName={deleteTeamName}
      />
    </>
  )
}

export default SelectTeamDropdown;
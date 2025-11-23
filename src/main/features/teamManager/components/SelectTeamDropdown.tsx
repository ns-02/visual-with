import { useState } from "react";
import { DropdownMenu } from "radix-ui";
import Dropdown from "../../../../components/Dropdown";
import CreateTeamDialog from "../dialogs/CreateTeamDialog";
import Item from "../../../../components/ui/Item";
import Button from "../../../../components/ui/Button";
import styles from "../../../../components/Dropdown.module.css";
import { Trash2 } from "lucide-react";
import DeleteTeamDialog from "../dialogs/DeleteTeamDialog";
import { DropdownProps, TeamItem } from "../types";

const SelectTeamDropdown = ({ triggerElement, onSelect }: DropdownProps) => {
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);
  
  // const teamItems: TeamItem[] | null = [
  //   // { id: 1, text: "기획팀" },
  //   // { id: 2, text: "개발팀" },
  //   // { id: 3, text: "운영팀" },
  // ];

  const initialTeam: TeamItem[] = [];
  const [teamItems, setTeamItems] = useState<TeamItem[]>(initialTeam);
  const [currentItemId, setcurrentItemId] = useState(1);
  const [selectTeamId, setSelectTeamId] = useState(0);

  const handleCreateTeam = (teamName: string) => {
    const newItem = { id: currentItemId, text: teamName };
    const nextTeamItems = [...teamItems, newItem];
    setTeamItems(nextTeamItems);
    setcurrentItemId(currentItemId + 1);
  };

  const handleItemClick = (item: TeamItem) => {
    
    setSelectTeamId(item.id);
    if (onSelect) onSelect(item.text);
  };
  
  const dropdownContent = (
    <>
      {
        teamItems.length > 0 && (
        <>
          {
            teamItems.map((item) => {
              return (
                <DropdownMenu.Item key={item.id} onClick={() => handleItemClick(item)}>
                  <Item type="list" text={item.text}>
                    <Button onCustomClick={() => setIsDeleteTeamDialogOpen(true)}>
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
      />
    </>
  )
}

export default SelectTeamDropdown;
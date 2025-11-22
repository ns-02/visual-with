import { useState } from "react";
import { DropdownMenu } from "radix-ui";
import Dropdown from "../../../../components/Dropdown";
import CreateTeamDialog from "../dialogs/CreateTeamDialog";
import Item from "../../../../components/ui/Item";
import Button from "../../../../components/ui/Button";
import styles from "../../../../components/Dropdown.module.css";
import { Trash2 } from "lucide-react";
import DeleteTeamDialog from "../dialogs/DeleteTeamDialog";
import { DropdownProps } from "../types";

const SelectTeamDropdown = ({ triggerElement }: DropdownProps) => {
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);
  
  const teamItems: any[] = [
    { id: "1", text: "기획팀" },
    { id: "2", text: "개발팀" },
    { id: "3", text: "운영팀" },
  ];
  
  const dropdownContent = (
    <>
      {
        teamItems.length > 0 &&
        teamItems.map((item) => {
          return (
            <DropdownMenu.Item key={item.id}>
              <Item type="list" text={item.text}>
                <Button onCustomClick={() => setIsDeleteTeamDialogOpen(true)}>
                  <Trash2 size={16} />
                </Button>
              </Item>
            </DropdownMenu.Item>
          )
        })
      }
      {teamItems.length > 0 && <DropdownMenu.Separator className={styles.separator} />}
      <DropdownMenu.Item
        onSelect={() => setIsCreateTeamDialogOpen(true)}
        asChild
      >
        <Item type="add" text="팀 생성" />
      </DropdownMenu.Item>
    </>
  )

  return (
    <>
      <Dropdown trigger={triggerElement} content={dropdownContent} />
      <CreateTeamDialog open={isCreateTeamDialogOpen} onOpenChange={setIsCreateTeamDialogOpen} />
      <DeleteTeamDialog open={isDeleteTeamDialogOpen} onOpenChange={setIsDeleteTeamDialogOpen} />
    </>
  )
}

export default SelectTeamDropdown;
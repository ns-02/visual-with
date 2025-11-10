import { useEffect, useState } from "react";
import { DropdownMenu } from "radix-ui";
import Dropdown from "../../../components/Dropdown";
import CreateTeamDialog from "../dialogs/CreateTeamDialog";
import Item from "../../../components/ui/Item";
import Button from "../../../components/ui/Button";
import styles from "../../../components/Dropdown.module.css";
import { Trash2 } from "lucide-react";
import DeleteTeamDialog from "../dialogs/DeleteTeamDialog";

const SelectTeamDropdown = () => {
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);
  
  const teamItems = [
    { text: "기획팀" },
    { text: "개발팀" },
    { text: "운영팀" },
  ];

  return (
    <>
      <Dropdown>
        {
          teamItems.map((item) => {
            return (
              <DropdownMenu.Item>
                <Item type="list" text={item.text}>
                  <Button icon={Trash2} iconSize={16} onCustomClick={() => setIsDeleteTeamDialogOpen(true)} />
                </Item>
              </DropdownMenu.Item>
            )
          })
        }
        <DropdownMenu.Separator className={styles.separator} />
        <DropdownMenu.Item
          onSelect={() => setIsCreateTeamDialogOpen(true)}
          asChild
        >
          <Item type="add" text="팀 생성" />
        </DropdownMenu.Item>
      </Dropdown>
      <CreateTeamDialog open={isCreateTeamDialogOpen} onOpenChange={setIsCreateTeamDialogOpen} />
      <DeleteTeamDialog open={isDeleteTeamDialogOpen} onOpenChange={setIsDeleteTeamDialogOpen} />
    </>
  )
}

export default SelectTeamDropdown;
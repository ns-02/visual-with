import { useEffect, useState } from "react";
import { DropdownMenu } from "radix-ui";
import Dropdown from "../../../components/Dropdown";
import CreateTeamDialog from "../dialogs/CreateTeamDialog";
import Item from "../../../components/ui/Item";

const SelectTeamDropdown = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  useEffect(() => {
  }, [isDialogOpen]);

  return (
    <>
      <Dropdown>
        <DropdownMenu.Item
          onSelect={() => setIsDialogOpen(true)}
          asChild
        >
          <Item type="add" text="팀 생성" />
        </DropdownMenu.Item>
      </Dropdown>
      <CreateTeamDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  )
}

export default SelectTeamDropdown;
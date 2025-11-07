import { DropdownMenu } from "radix-ui";
import Button from "./ui/Button";

const DropdownButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button text="버" shape="square" />
	    </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default DropdownButton;
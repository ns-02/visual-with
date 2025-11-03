import { DropdownMenu } from "@radix-ui/themes"
import Button from "./ui/Button";

const DropdownButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button text="버" onClick={() => {}} />
	    </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  )
}

export default DropdownButton;
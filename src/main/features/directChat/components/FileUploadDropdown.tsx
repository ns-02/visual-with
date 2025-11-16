import { DropdownMenu } from "radix-ui";
import Dropdown from "../../../../components/Dropdown";
import Item from "../../../../components/ui/Item";

interface Props {
  triggerElement?: React.ReactNode;
}

const FileUploadDropdown = ({ triggerElement }: Props) => {
  
  const Items = [
    { id: "1", text: "파일 업로드" },
  ];
  
  const dropdownContent = (
    <>
      {
        Items.map((item) => {
          return (
            <DropdownMenu.Item key={item.id}>
              <Item type="list" text={item.text} />
            </DropdownMenu.Item>
          )
        })
      }
    </>
  )

  return (
    <Dropdown trigger={triggerElement} content={dropdownContent} />
  )
}

export default FileUploadDropdown;
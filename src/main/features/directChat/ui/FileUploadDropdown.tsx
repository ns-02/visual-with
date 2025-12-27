import { DropdownMenu } from 'radix-ui';
import { DropdownProps } from '..';
import { Item } from '@shared/components/ui';
import { Dropdown } from '@shared/components/ui';

const FileUploadDropdown = ({ triggerElement }: DropdownProps) => {
  const Items = [{ id: '1', text: '파일 업로드' }];

  const dropdownContent = (
    <>
      {Items.map((item) => {
        return (
          <DropdownMenu.Item key={item.id}>
            <Item type='list' text={item.text} />
          </DropdownMenu.Item>
        );
      })}
    </>
  );

  return <Dropdown trigger={triggerElement} items={dropdownContent} />;
};

export default FileUploadDropdown;

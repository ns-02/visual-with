import { DropdownMenu } from 'radix-ui';
import { Item } from '@components/ui';
import { Dropdown } from '@components/ui';
import styles from './FileSharingDropdown.module.css';

interface DropdownProps {
  triggerElement?: React.ReactNode;
}

const FileSharingDropdown = ({ triggerElement }: DropdownProps) => {
  const Items = [{ id: '1', text: '삭제' }];

  const dropdownContent = (
    <>
      {Items.map((item) => {
        return (
          <DropdownMenu.Item key={item.id}>
            <Item className={styles.item} type='list' text={item.text} />
          </DropdownMenu.Item>
        );
      })}
    </>
  );

  return <Dropdown trigger={triggerElement} items={dropdownContent} />;
};

export default FileSharingDropdown;

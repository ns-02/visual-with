import { DropdownMenu } from 'radix-ui';
import { Item } from '@components/ui';
import { Dropdown } from '@components/ui';
import styles from './ScheduleDropdown.module.css';

interface DropdownProps {
  triggerElement?: React.ReactNode;
}

const ScheduleDropdown = ({ triggerElement }: DropdownProps) => {
  const Items = [
    { id: '1', text: '수정' },
    { id: '2', text: '삭제' },
  ];

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

export default ScheduleDropdown;

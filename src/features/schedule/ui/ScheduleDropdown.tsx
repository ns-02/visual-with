import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Dropdown, Item } from '@shared/components/ui';
import UpdateScheduleDialog from '../dialogs/UpdateScheduleDialog';
import DeleteScheduleDialog from '../dialogs/DeleteScheduleDialog';
import styles from './ScheduleDropdown.module.css';

interface DropdownProps {
  scheduleId?: number;
  triggerElement?: React.ReactNode;
}

const ScheduleDropdown = ({ scheduleId, triggerElement }: DropdownProps) => {
  const [isUpdateScheduleDialogOpen, setIsUpdateScheduleDialogOpen] =
    useState(false);
  const [isDeleteScheduleDialogOpen, setIsDeleteScheduleDialogOpen] =
    useState(false);

  const Items = [
    {
      id: '1',
      text: '수정',
      onClick: () => setIsUpdateScheduleDialogOpen(true),
    },
    {
      id: '2',
      text: '삭제',
      onClick: () => setIsDeleteScheduleDialogOpen(true),
    },
  ];

  const dropdownContent = (
    <>
      {Items.map((item) => {
        return (
          <DropdownMenu.Item key={item.id} onClick={item.onClick}>
            <Item className={styles.item} type='list' text={item.text} />
          </DropdownMenu.Item>
        );
      })}
    </>
  );

  return (
    <>
      <Dropdown trigger={triggerElement} items={dropdownContent} />
      <UpdateScheduleDialog
        scheduleId={scheduleId}
        open={isUpdateScheduleDialogOpen}
        onOpenChange={setIsUpdateScheduleDialogOpen}
      />
      <DeleteScheduleDialog
        scheduleId={scheduleId}
        open={isDeleteScheduleDialogOpen}
        onOpenChange={setIsDeleteScheduleDialogOpen}
      />
    </>
  );
};

export default ScheduleDropdown;

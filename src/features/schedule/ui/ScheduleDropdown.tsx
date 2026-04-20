import { useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Dropdown, Item } from '@shared/components/ui';
import UpdateScheduleDialog from '../dialogs/UpdateScheduleDialog';
import DeleteScheduleDialog from '../dialogs/DeleteScheduleDialog';
import styles from './ScheduleDropdown.module.css';
import { getIsPermit } from '@shared/utils/permitUtils';
import { useUserStore } from '@core/store/useUserStore';
import { useTeamMembershipStore } from '@core/store/useTeamMembershipStore';

interface DropdownProps {
  scheduleId?: number;
  authorId?: string;
  triggerElement?: React.ReactNode;
}

const ScheduleDropdown = ({
  scheduleId,
  authorId,
  triggerElement,
}: DropdownProps) => {
  const [isUpdateScheduleDialogOpen, setIsUpdateScheduleDialogOpen] =
    useState(false);
  const [isDeleteScheduleDialogOpen, setIsDeleteScheduleDialogOpen] =
    useState(false);
  const userId = useUserStore((state) => state.userId);
  const currentRule = useTeamMembershipStore((state) => state.currentRule);

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

  const EmptyItems = [{ id: '1', text: '권한 부족' }];

  const dropdownContent = (
    <>
      {getIsPermit({ authorId, userId, rule: currentRule })
        ? Items.map((item) => {
            return (
              <DropdownMenu.Item key={item.id} onClick={item.onClick}>
                <Item className={styles.item} type='list' text={item.text} />
              </DropdownMenu.Item>
            );
          })
        : EmptyItems.map((item) => {
            return (
              <DropdownMenu.Item key={item.id}>
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

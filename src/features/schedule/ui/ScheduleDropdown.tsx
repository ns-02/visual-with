import { useState } from 'react';
import UpdateScheduleDialog from '../dialogs/UpdateScheduleDialog';
import DeleteScheduleDialog from '../dialogs/DeleteScheduleDialog';
import styles from './ScheduleDropdown.module.css';
import { getIsPermit } from '@shared/utils/permitUtils';
import { useUserStore } from '@core/store/useUserStore';
import PermissionDropdown from '@shared/domain/PermissionDropdown';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';

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
  const userId = useUserStore((state) => state.user?.id);
  const currentRule = useWorkspaceStore((state) => state.currentRule);

  const Actions = [
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

  return (
    <>
      <PermissionDropdown
        itemClassName={styles.item}
        actions={Actions}
        canEdit={getIsPermit({ authorId, userId, rule: currentRule })}
        triggerElement={triggerElement}
      />
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

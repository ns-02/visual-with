import { useState } from 'react';
import UpdateScheduleDialog from './UpdateScheduleDialog';
import DeleteScheduleDialog from './DeleteScheduleDialog';
import { getIsPermit } from '@shared/utils/permitUtils';
import { useUserStore } from '@core/store/useUserStore';
import PermissionDropdown from '@shared/components/PermissionDropdown';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';

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
  const { currentRule } = useCurrentWorkspace();

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
        itemClassName='w_100 fs_14'
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

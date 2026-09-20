import { Dispatch, SetStateAction } from 'react';
import AlertDialog from '@shared/components/AlertDialog';
import { useLogout } from '@core/hooks/useLogout';

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const LogoutDialog = ({ open, onOpenChange }: Props) => {
  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <AlertDialog
      title='로그아웃 확인'
      description='정말로 로그아웃하시겠습니까?'
      open={open}
      onOpenChange={onOpenChange}
      confirmText='로그아웃'
      onConfirm={handleLogout}
    ></AlertDialog>
  );
};

export default LogoutDialog;

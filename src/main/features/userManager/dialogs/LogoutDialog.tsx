import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '@components/dialogs/AlertDialog';
interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const LogoutDialog = ({ open, onOpenChange }: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 처리

    navigate('/');
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

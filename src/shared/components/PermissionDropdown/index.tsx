import { DropdownMenu } from 'radix-ui';
import { ReactNode } from 'react';
import Dropdown from '../Dropdown';
import { ListItem } from '..';

type PermissionAction = {
  id: string;
  text: string;
  onClick?: () => void;
};

type PermissionDropdownProps = {
  triggerElement?: ReactNode;
  actions: PermissionAction[];
  canEdit: boolean;
  deniedText?: string;
  itemClassName?: string;
};

const PermissionDropdown = (props: PermissionDropdownProps) => {
  const {
    actions,
    itemClassName,
    triggerElement,
    canEdit,
    deniedText = '권한 부족',
  } = props;

  return (
    <Dropdown trigger={triggerElement}>
      {canEdit ? (
        actions.map((action) => (
          <DropdownMenu.Item key={action.id} onClick={action.onClick}>
            <ListItem className={itemClassName} text={action.text} />
          </DropdownMenu.Item>
        ))
      ) : (
        <DropdownMenu.Item>
          <ListItem className={itemClassName} text={deniedText} />
        </DropdownMenu.Item>
      )}
    </Dropdown>
  );
};

export default PermissionDropdown;

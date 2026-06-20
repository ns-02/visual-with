import { EllipsisVertical } from 'lucide-react';
import Button from '../Button';

const DropdownTrigger = () => {
  return (
    <Button variant='content'>
      <EllipsisVertical size={16} />
    </Button>
  );
};

export default DropdownTrigger;

import { forwardRef } from 'react';
import { EllipsisVertical } from 'lucide-react';
import Button from '../Button';

const DropdownTrigger = forwardRef<HTMLButtonElement>((props, ref) => {
  return (
    <Button variant='content' ref={ref} {...props}>
      <EllipsisVertical size={16} />
    </Button>
  );
});

DropdownTrigger.displayName = 'DropdownTrigger';

export default DropdownTrigger;

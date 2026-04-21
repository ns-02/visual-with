import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import styles from './CheckBox.module.css';

export interface CheckBoxProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id: string;
  disabled?: boolean;
}

const CheckBox = (props: CheckBoxProps) => {
  const { checked, id, onCheckedChange, disabled } = props;

  return (
    <Checkbox.Root
      className={styles.CheckboxRoot}
      checked={checked}
      onCheckedChange={(state) => {
        if (typeof state === 'boolean') {
          onCheckedChange?.(state);
        }
      }}
      id={id}
      disabled={disabled}
    >
      <Checkbox.Indicator className={styles.CheckboxIndicator}>
        <Check size={12} strokeWidth={3} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};

export default CheckBox;

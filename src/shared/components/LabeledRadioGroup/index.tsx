import { useId } from 'react';
import { RadioGroup } from 'radix-ui';
import styles from './LabeledRadioGroup.module.css';

export interface LabeledRadioGroupOption {
  value: string;
  label: string;
}

export interface LabeledRadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  options: LabeledRadioGroupOption[];
}

const LabeledRadioGroup = (props: LabeledRadioGroupProps) => {
  const { value, onValueChange, options } = props;
  const baseId = useId();

  return (
    <RadioGroup.Root
      className={styles.root}
      value={value}
      onValueChange={onValueChange}
    >
      {options.map((option) => {
        const controlId = `${baseId}-${option.value}`;
        return (
          <div className={styles.row} key={option.value}>
            <RadioGroup.Item
              id={controlId}
              className={styles.item}
              value={option.value}
            >
              <RadioGroup.Indicator className={styles.indicator} />
            </RadioGroup.Item>
            <label className={styles.label} htmlFor={controlId}>
              {option.label}
            </label>
          </div>
        );
      })}
    </RadioGroup.Root>
  );
};

export default LabeledRadioGroup;

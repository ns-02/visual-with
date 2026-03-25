import { ChangeEventHandler, RefObject } from 'react';

export interface FileInputProps {
  ref: RefObject<HTMLInputElement | null>;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

function FileInput({ ref, onChange }: FileInputProps) {
  return (
    <input
      style={{ display: 'none' }}
      ref={ref}
      type='file'
      onChange={onChange}
    />
  );
}

export default FileInput;

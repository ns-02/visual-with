import { FileInputProps } from '..';

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

import { DropdownMenu } from 'radix-ui';
import { Dropdown, ListItem } from '@shared/components';
import { ChangeEvent, ReactNode, useRef } from 'react';

const FileUploadDropdown = ({
  triggerElement,
  onUpload,
}: {
  triggerElement: ReactNode;
  onUpload: (file: File | undefined) => Promise<void>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = (e: Event) => {
    e.preventDefault();

    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const Items = [
    { id: '1', text: '파일 업로드', handler: handleFileUploadClick },
  ];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      onUpload(selectedFile);
    }
  };

  return (
    <Dropdown trigger={triggerElement}>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type='file'
        onChange={handleFileChange}
        autoComplete='off'
      />

      {Items.map((item) => {
        return (
          <DropdownMenu.Item key={item.id} onSelect={item.handler}>
            <ListItem text={item.text} />
          </DropdownMenu.Item>
        );
      })}
    </Dropdown>
  );
};

export default FileUploadDropdown;

import { DropdownMenu } from 'radix-ui';
import { Dropdown, FileInput } from '@shared/components/ui';
import { Item } from '@shared/components/ui';
import { DropdownProps } from '..';
import { ChangeEvent, useRef } from 'react';
import { useFileStore } from '@features/fileSharing/store/useFileStore';

const FileUploadDropdown = ({ triggerElement }: DropdownProps) => {
  const uploadFile = useFileStore((state) => state.uploadFile);
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
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}`;
      const selectedFile = e.target.files[0];

      if (selectedFile) {
        uploadFile(selectedFile, formattedDate);
      }
    }
  };

  const dropdownContent = (
    <>
      <FileInput ref={inputRef} onChange={handleFileChange} />
      {Items.map((item) => {
        return (
          <DropdownMenu.Item key={item.id} onSelect={item.handler}>
            <Item type='list' text={item.text}></Item>
          </DropdownMenu.Item>
        );
      })}
    </>
  );

  return <Dropdown trigger={triggerElement} items={dropdownContent} />;
};

export default FileUploadDropdown;

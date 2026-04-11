import { useTeamStore } from '@core/store/useTeamStore';
import { DropdownMenu } from 'radix-ui';
import { Dropdown, FileInput } from '@shared/components/ui';
import { Item } from '@shared/components/ui';
import { DropdownProps } from '..';
import { ChangeEvent, useRef } from 'react';
import { useFileStore } from '@features/fileSharing';
import { formatDate } from '@shared/utils/formatDate';

const FileUploadDropdown = ({ triggerElement }: DropdownProps) => {
  const uploadFile = useFileStore((state) => state.uploadFile);
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
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

      if (selectedFile && selectTeamId) {
        uploadFile(selectedFile, formatDate(), selectTeamId);
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

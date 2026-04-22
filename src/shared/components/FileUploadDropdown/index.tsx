import { DropdownMenu } from 'radix-ui';
import { FileInput, Item, Dropdown } from '@shared/components';
import { ChangeEvent, ReactNode, useRef } from 'react';
import { useFileManager } from '@features/fileSharing/hooks/useFileManager';

const FileUploadDropdown = ({
  triggerElement,
}: {
  triggerElement: ReactNode;
}) => {
  // directChat의 파일도 팀 파일 공간으로 업로드되니, 수정 필요
  const { loadAndUploadFile } = useFileManager();
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
      loadAndUploadFile(selectedFile);
    }
  };

  const dropdownContent = (
    <>
      <FileInput ref={inputRef} onChange={handleFileChange} />
      {Items.map((item) => {
        return (
          <DropdownMenu.Item key={item.id} onSelect={item.handler}>
            <Item type='list' text={item.text} />
          </DropdownMenu.Item>
        );
      })}
    </>
  );

  return <Dropdown trigger={triggerElement} items={dropdownContent} />;
};

export default FileUploadDropdown;

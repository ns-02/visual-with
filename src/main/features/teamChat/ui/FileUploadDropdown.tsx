import { DropdownMenu } from 'radix-ui';
import { Dropdown } from '@components/ui';
import { Item } from '@components/ui';
import { DropdownProps } from '..';

const FileUploadDropdown = ({ triggerElement }: DropdownProps) => {
  const handleFileUploadClick = () => {
    // 실제 구현 시:
    // 1. 숨겨진 <input type="file"> 요소 참조 (useRef 사용)
    // 2. 해당 요소의 .click() 메소드를 호출
    console.log('파일 업로드 클릭됨: 파일 선택 창을 띄웁니다.');
  };

  const Items = [
    { id: '1', text: '파일 업로드', handler: handleFileUploadClick },
  ];

  const dropdownContent = (
    <>
      {Items.map((item) => {
        return (
          <DropdownMenu.Item key={item.id} onClick={item.handler}>
            <Item type='list' text={item.text} />
          </DropdownMenu.Item>
        );
      })}
    </>
  );

  return <Dropdown trigger={triggerElement} items={dropdownContent} />;
};

export default FileUploadDropdown;

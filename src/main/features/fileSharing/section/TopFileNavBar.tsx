import { useState } from 'react';
import FileNavButton from '../components/FileNavButton';
import { TopFileNavBarProps } from '../types';
import styles from './FileSharingSection.module.css';

function TopFileNavBar({ onSelect }: TopFileNavBarProps) {
  const fileNavItemsInit = [
    { id: 'all', text: '전체', selected: true },
    { id: 'images', text: '이미지', selected: false },
    { id: 'movies', text: '동영상', selected: false },
    { id: 'audios', text: '오디오', selected: false },
    { id: 'others', text: '기타', selected: false },
  ];

  const [fileNavItems, setFileNavItems] = useState(fileNavItemsInit);

  const handleButtonClick = (id: string) => {
    const nextNavItems = fileNavItems.map((item) =>
      item.id === id
        ? { ...item, selected: true }
        : { ...item, selected: false },
    );

    setFileNavItems(nextNavItems);
    onSelect && onSelect(id);
  };

  return (
    <div className={styles.top_files}>
      {fileNavItems.map((item) => (
        <FileNavButton
          key={item.id}
          text={item.text}
          selected={item.selected}
          onClick={() => handleButtonClick(item.id)}
        />
      ))}
    </div>
  );
}

export default TopFileNavBar;

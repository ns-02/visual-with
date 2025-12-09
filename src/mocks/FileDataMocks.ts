import { FileData } from '@models/File';

export const fileDataMocks: FileData[] = [
  {
    id: 1,
    fileName: '이미지.png',
    fileSize: '2.4MB',
    fileType: 'images',
    date: '2025-10-15',
    uploader: '김철수',
    timeAgo: '3일 전',
  },
  {
    id: 2,
    fileName: '동영상.mp4',
    fileSize: '45.2MB',
    fileType: 'videos',
    date: '2025-10-12',
    uploader: '김철수',
    timeAgo: '5일 전',
  },
  {
    id: 3,
    fileName: '보고서.pdf',
    fileSize: '1.8MB',
    fileType: 'others',
    date: '2025-10-10',
    uploader: '이영희',
    timeAgo: '8일 전',
  },
];

import { useFile } from '@context/FileContext';
import { FileData } from '@models/File';
import { getDate } from '@utils/dateUtils';
import getFormattedFileSize from '@utils/getFormattedFileSize';
import getFormattedFileType from '@utils/getFormattedFileType';
import getMaxId from '@utils/getMaxId';

const useFileManager = () => {
  const { fileData, setFileData } = useFile();
  const { year, month, day } = getDate();

  const uploadFile = (file?: File) => {
    if (!file) return;

    const maxId = getMaxId(fileData) ?? 0;
    const nextFileData: FileData[] = [
      ...fileData,
      {
        id: maxId + 1,
        fileName: file.name,
        fileSize: getFormattedFileSize(file.size),
        fileType: getFormattedFileType(file.type),
        date: `${year}-${month}-${day}`,
        uploader: '아무개',
        timeAgo: '오늘',
      },
    ];

    setFileData(nextFileData);
  };

  return { uploadFile };
};

export default useFileManager;

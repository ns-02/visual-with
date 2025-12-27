import { createContext, useContext, useState } from 'react';
import { FileData } from '@models/File';
import { fileDataMocks } from '../../mocks/FileDataMocks';

type FileContextType = {
  fileData: FileData[];
  setFileData: (item: FileData[]) => void;
};

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fileData, setFileData] = useState<FileData[]>(fileDataMocks);

  return (
    <FileContext.Provider value={{ fileData, setFileData }}>
      {children}
    </FileContext.Provider>
  );
};

export function useFile() {
  const v = useContext(FileContext);
  if (!v)
    throw new Error('useFile는 반드시 FileProvider 내부에서 사용해야 합니다.');
  return v;
}

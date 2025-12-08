import { createContext, useContext, useState } from 'react';
import { ScheduleData } from '@models/Schedule';
import { scheduleDataMocks } from '../mocks/ScheduleDataMocks';

type ScheduleContextType = {
  scheduleData: ScheduleData[];
  setScheduleData: (item: ScheduleData[]) => void;
};

const ScheduleContext = createContext<ScheduleContextType | undefined>(
  undefined,
);

export const ScheduleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scheduleData, setScheduleData] =
    useState<ScheduleData[]>(scheduleDataMocks);

  return (
    <ScheduleContext.Provider value={{ scheduleData, setScheduleData }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export function useSchedule() {
  const v = useContext(ScheduleContext);
  if (!v)
    throw new Error(
      'useSchedule는 반드시 ScheduleProvider 내부에서 사용해야 합니다.',
    );
  return v;
}

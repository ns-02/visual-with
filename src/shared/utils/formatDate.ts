import { differenceInDays } from 'date-fns';

/**
 *
 * @returns YYYY-MM-DD
 */
export const formatDate = (currentDate?: Date) => {
  const date = currentDate || new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const parseDate = (dateString: string) => {
  return new Date(dateString);
};

/**
 *
 * @returns hh:mm
 */
export const formatTime = () => {
  const date = new Date();

  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  const formattedTIme = `${hour}:${minute}`;

  return formattedTIme;
};

export const formatTimeAgo = (
  dateString?: string,
  timeString?: string,
): string => {
  if (!dateString) return '알 수 없음';

  const targetDate = timeString
    ? parseDate(`${dateString}T${timeString}`)
    : parseDate(dateString);
  const now = new Date();
  const diffDays = differenceInDays(now, targetDate);

  if (diffDays < 0) return '알 수 없음';

  if (diffDays === 0) {
    if (timeString) {
      const diffMs = now.getTime() - targetDate.getTime();
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

      if (diffMinutes < 1) return '방금 전';
      if (diffMinutes < 60) return `${diffMinutes}분 전`;
      if (diffHours < 24) return `${diffHours}시간 전`;
    }

    return '오늘';
  }

  if (diffDays === 1) return '1일 전';

  return `${diffDays}일 전`;
};

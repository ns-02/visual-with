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

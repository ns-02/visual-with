const getFormattedFileSize = (value: number) => {
  const sizes = ['바이트', 'KB', 'MB', 'GB'];
  let sizeIndex = 0;

  while (value >= 1024 && sizeIndex < 3) {
    sizeIndex++;
    value = value / 1024;
  }

  value = Math.ceil(value * 10) / 10;

  return `${value}${sizes[sizeIndex]}`;
};

export default getFormattedFileSize;

const getFormattedFileType = (value: string) => {
  if (value.startsWith('image/')) return 'images';
  else if (value.startsWith('video/')) return 'videos';
  else if (value.startsWith('audio/')) return 'audios';
  else return 'others';
};

export default getFormattedFileType;

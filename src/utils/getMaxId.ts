const getMaxId = (items: any[]) => {
  return items.length > 0 ? Math.max(...items.map((item) => item.id)) : 0;
};

export default getMaxId;

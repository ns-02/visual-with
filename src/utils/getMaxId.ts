const getMaxId = (items: any[]) => {
  if (!items[0].id) {
    console.error("Error: Object for getMaxId must contain 'id'.");
  }

  return items.length > 0 ? Math.max(...items.map((item) => item.id)) : 0;
};

export default getMaxId;

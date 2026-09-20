const storage = window.sessionStorage;

export const setItem = (key: string, value: string) => {
  try {
    storage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const getItem = (key: string, defaultValue: string) => {
  try {
    const storedValue = storage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  } catch (e) {
    console.log(e);
    return defaultValue;
  }
};

export const clearByPrefix = (prefix: string) => {
  try {
    for (let i = storage.length - 1; i >= 0; i -= 1) {
      const key = storage.key(i);
      if (key?.startsWith(prefix)) {
        storage.removeItem(key);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

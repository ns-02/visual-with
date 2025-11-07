export const request = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('API 호출 오류');
  }
  catch (e: any) {
    alert(e.message);
  }
}
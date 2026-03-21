export function debounce<T extends unknown[]>(
  func: (...args: T) => void,
  timeout = 1000,
) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

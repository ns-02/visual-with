export function debounce(func: (value: any) => void, timeout = 1000) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  
  return function(...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, timeout);
  };
};
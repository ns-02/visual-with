export function debounce(func: (value: any) => void, timeout = 1000) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  
  return function(...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("실행");
      func(args);
    }, timeout);
  };
};
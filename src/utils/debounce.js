export const throttle = (fn, wait) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn(...args);
      }, wait);
    }
  };
};

export const debounce = (fn, wait) => {
  let timer;
  return (...args) => {
    const now = !timer;
    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
    }, wait);

    if (now) {
      fn(...args);
    }
  };
};

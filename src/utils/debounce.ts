let value = 0;
const debounce = (fn: () => void, timeout: number) => {
  clearTimeout(value);
  value = setTimeout(() => {
    fn();
  }, timeout);
};

export default debounce;

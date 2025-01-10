export const add = (x, y) => x + y;
export const subtr = (x, y) => x - y;
export const divide = (x, y) => x / y;
export const multiply = (x, y) => x * y;
export const reverse = (x) => (x === 0 ? x : x * -1);
export const pow = (x, y) => (y >= 0 ? x ** y : x ** y * -1);
export const fraction = (x) => 1 / x;
export const sqrt = (x, y) => x ** (1 / y);
export const percent = (x, y) => (x ? (y * x) / 100 : x);

export const factorial = (x) => {
  if (x < 0 || !Number.isInteger(x)) {
    return Infinity;
  } else if (x === 0) {
    return 1;
  } else {
    let start = 1;
    for (let i = 2; i <= x; i++) {
      start *= i;
    }
    return start;
  }
};

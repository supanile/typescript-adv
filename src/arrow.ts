const checkNumbers = (num: number): string => {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

const totals = (a: number, b: number): number => {
  return a + b;
};

console.log(checkNumbers(7));
console.log(totals(300, 200));

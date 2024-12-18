// Rest Parameter

const total5 = (...numbers: number[]) => {
  return numbers.reduce((result, value) => {
    return result + value;
  },0);
};
// 0 + 100
// 100 + 200

console.log(total5(100, 200));
console.log(total5(100, 200, 300));
console.log(total5(100, 200, 300, 400));
console.log(total5(100, 200, 300, 400, 500));

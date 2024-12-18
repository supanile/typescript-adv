function checkNumber(num: number): string {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

function total(a: number, b: number): number {
  return a + b;
}


console.log(checkNumber(6));
console.log(total(100,200));

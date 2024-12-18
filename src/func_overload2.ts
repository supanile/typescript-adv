// function total(a: number, b: number): number {
//   return a + b;
// }

// function total2(a: string, b: string): string {
//   return (parseInt(a) + parseInt(b)).toString();
// }

// console.log(total(100, 200));
// console.log(total2("100", "200"));


// Function Overloading
function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: unknown, b: unknown): unknown {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  }
  if (typeof a == "string" && typeof b == "string") {
    return parseInt(a) + parseInt(b);
  }
  throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}

console.log(total(100, 200));
console.log(total("100", "200"));

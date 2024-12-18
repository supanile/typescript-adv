"use strict";
// function total(a: number, b: number): number {
//   return a + b;
// }
function total(a, b) {
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

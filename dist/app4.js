"use strict";
function checkNumber(num) {
    if (num % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
function total(a, b) {
    return a + b;
}
console.log(checkNumber(6));
console.log(total(100, 200));

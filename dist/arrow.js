"use strict";
const checkNumbers = (num) => {
    if (num % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
};
const totals = (a, b) => {
    return a + b;
};
console.log(checkNumbers(7));
console.log(totals(300, 200));

"use strict";
function sayHello(name) {
    if (!name) {
        return `Hello TypeScript`;
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw new Error("ชนิดข้อมูลไม่ถูก");
}
console.log(sayHello());
console.log(sayHello("Nile"));

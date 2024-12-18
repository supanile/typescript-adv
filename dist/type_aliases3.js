"use strict";
// Type Aliases (Readonly Modefier)
let emp6 = { id: 1, name: "Nyle", salary: 999999, phone: "191" };
// Cannot Change
emp6.id = 99;
emp6.salary = 99999999999;
// Can change
emp6.name = "Nine";
emp6.phone = "099999999999";
console.log(emp6);

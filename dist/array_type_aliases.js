"use strict";
const employees = [];
employees.push({ name: "Nyle", salary: 50000, department: "Programmer" });
employees.push({ name: "Emma", salary: 65000 });
employees.push({ name: "Carlos", salary: 55000, department: "Marketing" });
employees.forEach((ele) => {
    console.log(ele);
});
for (const person of employees) {
    console.log(person);
}

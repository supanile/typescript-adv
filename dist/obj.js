"use strict";
const person1 = {
    name: "Pon",
    age: 20,
};
const person2 = { name: "Nyle", age: 30 };
const position = { lat: 53, long: 42 };
// Object Input Function
function showDetail(data) {
    console.log(`Name = ${data.name} , Age = ${data.age}`);
}
showDetail(person2);
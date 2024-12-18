"use strict";
const sections = ["Finance", "IT"];
const departments = ["Programmer", "Marketing", "Graphic"];
departments.push(...sections); // Spread Operator
console.log(departments);

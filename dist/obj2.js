"use strict";
// Return Object
const position2 = { lat: 53, long: 42 };
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random()
    };
};
console.log(randomPosition());

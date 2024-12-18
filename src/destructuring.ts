// Array Destructuring

const colors: string[] = ["แดง", "เขียว", "น้ำเงิน"];
// const red:string = colors[0]
// const green:string = colors[1]
// const blue:string = colors[2]
const [red, green, blue] = colors; // Easy way Destructuring

console.log(red);
console.log(green);
console.log(blue);

// Object Destructuring

const person = {
  nickname: "Nile",
  age: 22,
  address: "Krungthep",
};

const { nickname, age, address } = person;

console.log(name);
console.log(age);
console.log(address);

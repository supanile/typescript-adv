const person1 = {
  name: "Pon",
  age: 20,
};

const person2: { name: string; age: number } = { name: "Nyle", age: 30 };

const position: { lat: number; long: number } = { lat: 53, long: 42 };

// Object Input Function
function showDetail(data:{name:string,age:number}){
    console.log(`Name = ${data.name} , Age = ${data.age}`)
}

showDetail(person2)
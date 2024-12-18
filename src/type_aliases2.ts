// Type Aliases (Optional Properties)

// กำหนด type Employee
type Employee2 = {
  id: number;
  name: string;
  salary: number;
  phone?: string;
};

let emp3: Employee2 = { id: 1, name: "Nyle", salary: 999999, phone: "191" };
let emp4: Employee2 = { id: 2, name: "Nan", salary: 9090990, phone: "911" };
let emp5: Employee2 = { id: 2, name: "Nan", salary: 9090990 };

console.log(emp3);
console.log(emp4);
console.log(emp5);

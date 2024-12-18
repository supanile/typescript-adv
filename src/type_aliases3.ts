// Type Aliases (Readonly Modefier)

// กำหนด type Employee
type Employee3 = {
  readonly id: number;
  name: string;
  readonly salary: number;
  phone?: string;
};

let emp6: Employee3 = { id: 1, name: "Nyle", salary: 999999, phone: "191" };
// Cannot Change
emp6.id = 99;
emp6.salary = 99999999999;

// Can change
emp6.name= "Nine";
emp6.phone = "099999999999";

console.log(emp6);

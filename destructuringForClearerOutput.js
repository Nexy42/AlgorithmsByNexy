//Here is a code written to see data listed nicely in the console

const users = [
  { id: 1, name: "Cabbar", age: 19 },
  { id: 2, name: "Ali", age: 21 },
  { id: 3, name: "Hasan", age: 34 },
];

for (const { id, name, age } of users) {
  console.log(`UserID: ${id}, UserName: ${name}, UserAge: ${age}`);
}

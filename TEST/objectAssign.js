const person = { name: 'Max', age: 23 };
const details = { sex: 'Male', age: 45, nationality: undefined };
 
Object.assign(person, details);
console.log(person);
const person = { name: 'Max', age: 23 };
const prop = { sex: 'Male', name : 'Jane', name: 'brown' };

let obj = {...person, ...prop};
console.log(obj);
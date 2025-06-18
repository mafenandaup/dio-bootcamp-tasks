
const { sayHello, biggestNumber } = require('./exports')

console.log(sayHello('maria'))

// isso é object destructuring: quando você extrai valores de obetos e os transforma em variáveis legiveis, por exemplo:

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const entradas = [24,56,2,35,11]

// Desestruturando o objeto
const { name, age, city } = person;
console.log(city)
console.log(biggestNumber(entradas))

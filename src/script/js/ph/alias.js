"use strict";
const person1 = {
    name: 'John',
    age: 25,
    address: 'Mexico',
};
const person2 = {
    name: 'Sam',
    age: 27,
    address: 'India',
    profession: 'Web Developer',
};
console.log(person1);
console.log(person2);
const calculate = (num1, num2, operation) => operation(num1, num2);
console.log(calculate(10, 10, (a, b) => a + b));
console.log(calculate(20, 10, (a, b) => a - b));
console.log(calculate(10, 10, (a, b) => a * b));
console.log(calculate(10, 10, (a, b) => a / b));

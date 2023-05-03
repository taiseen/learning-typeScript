"use strict";
// Object | Function | Array <== these all are object in JavaScript...
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const user_With_Type = {
    name: 'Sam',
    age: 25
};
const user_With_Type_Union = {
    name: 'Neo',
    age: 23,
    role: 'Student'
};
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const user_With_Interface = {
    name: 'Tom',
    age: 24
};
const user_With_Extend_Interface = {
    name: 'Jon',
    age: 26,
    role: 'Student'
};
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
console.log(user_With_Type);
console.log(user_With_Type_Union);
console.log(user_With_Interface);
console.log(user_With_Extend_Interface);
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 Function 🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// with out function type Signature...
const addNumber = (a, b) => a + b;
const addNumberA = (a, b) => a + b;
const addNumberB = (a, b) => a + b;
console.log(addNumber(1, 1));
console.log(addNumberA(2, 2));
console.log(addNumberB(5, 5));
const rollNumbersA = [1, 3, 5];
console.log(rollNumbersA);
const rollNumbersB = [2, 4, 6];
console.log(rollNumbersB);

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
// console.log(user_With_Type);
// console.log(user_With_Type_Union);
// console.log(user_With_Interface);
// console.log(user_With_Extend_Interface);
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
const userLogin = {
    name: 'Xen',
    pass: '123',
    type: 'admin',
    login: (username, password) => {
        console.log('User login info:-', { username }, { password });
        // return `User login info:- {username: ${username}} {password: ${password}}`;
    },
    isAdmin(type) {
        return type === 'admin' ? true : false;
    }
};
console.log(userLogin);
console.log(userLogin.isAdmin(userLogin.type));
userLogin.login(userLogin.name, userLogin.pass);
const rollNumbersA = [1, 3, 5];
const rollNumbersB = [2, 4, 6];
// console.log(rollNumbersB);

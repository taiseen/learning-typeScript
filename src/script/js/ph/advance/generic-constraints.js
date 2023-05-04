"use strict";
const userData1 = {
    name: 'Don',
    age: 27,
};
const userData2 = {
    name: 'Pol',
    age: 25,
    isMarried: false,
};
const userData3 = {
    name: 'Sam',
    // age: 28,
};
const userWithId = (data) => {
    const id = '101';
    const userData = Object.assign({ id }, data);
    return userData;
};
const u1 = userWithId(userData1);
const u2 = userWithId(userData2);
// const u3 = userWithId(userData3);
console.log(u1);
console.log(u2);
// console.log(u3);

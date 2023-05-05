"use strict";
// force generic type to be constant...
// its mean - our data type structure is fixed, no small change allow...
// so do not accept any object structure, only accept "extends" object structure...
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
// const u3 = userWithId(userData3); // object structure doesn't match... for using "extends" keyword
console.log(u1);
console.log(u2);
const personQ = {
    firstName: 'Saida',
    lastName: 'Andalib',
};
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
console.log(fullName(personQ));

"use strict";
// 05 - May - 2023
const addData = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
};
console.log(addData(1, 1));
console.log(addData('1', '5'));
const guestUser = { name: 'Zon' };
const adminUser = { name: 'Sam', role: 'admin' };
function getUser(user) {
    if ('role' in user) { // 🟥🟥🟥 <== using 'in' operator...
        return `${user.name} is ${user.role} user`;
    }
    else {
        return `${user.name} is guest user`;
    }
}
console.log(getUser(adminUser));
console.log(getUser(guestUser));
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 instance of gard 🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// gard ==> class & object...
class Animal1 {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    defaultSound() {
        console.log('Default Sound');
    }
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
class Cat1 extends Animal1 {
    constructor(name, color) {
        super(name, color);
    }
    catSound() {
        console.log('Cat sound...');
    }
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
class Dog1 extends Animal1 {
    constructor(name, color) {
        super(name, color);
    }
    dogSound() {
        console.log('Dog sound...');
    }
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const cat1 = new Cat1('Neo', 'Drown');
const dog1 = new Dog1('Tom', 'Gray');
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// approach ==> 1 | using 'instanceof' operator...
function playSound1(animal) {
    if (animal instanceof Cat1) {
        animal.catSound();
    }
    else if (animal instanceof Dog1) {
        animal.dogSound();
    }
    else {
        animal.defaultSound();
    }
}
// playSound1(cat1)
// playSound1(cat1)
// playSound1(dog1)
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// approach ==> 2 | using 'instanceof' + 'is' operator...
function isDog(animal) {
    return animal instanceof Dog1;
}
function isCat(animal) {
    return animal instanceof Cat1;
}
function playSound2(animal) {
    if (isCat(animal)) {
        animal.catSound();
    }
    else if (isDog(animal)) {
        animal.dogSound();
    }
    else {
        animal.defaultSound();
    }
}
playSound2(dog1);
playSound2(cat1);
playSound2(dog1);

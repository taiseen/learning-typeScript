"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 2));
const addNumbers = (a, b) => a + b;
console.log(addNumbers(20, 20));
const arr = [1, 2, 3, 4, 5];
console.log(arr.map((num) => num * 2));
const personInfo = {
    name: 'taiseen',
    marks: 55,
    getMarks(mark) {
        return `Total mark is : ${this.marks + mark}`;
    },
};
console.log(personInfo.getMarks(25));
console.log(personInfo);

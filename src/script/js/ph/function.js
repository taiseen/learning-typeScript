"use strict";
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 Normal Function 🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// function addJS(a, b) {
//     return a + b
// }
function add(a, b) {
    return a + b;
}
console.log(add(2, 2));
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 Arrow Function🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// const addNumbersJS = (a, b) => a + b;
// without type alias...
const addNumbersNormal = (a, b) => a + b;
console.log(addNumbersNormal(20, 20));
const addNumbersWithType = (a, b) => a + b;
console.log(addNumbersWithType(40, 40));
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
const arr = [1, 2, 3, 4, 5];
console.log(arr.map((num) => num * 2));
const personInfo = {
    name: 'taiseen',
    marks: 55,
    getMarks(mark) {
        return `Total mark is : ${this.marks + mark}`;
    },
};
console.log(personInfo);
console.log(personInfo.getMarks(25));

"use strict";
// we know "type" better than typeScript... this terminology is ==> Type Assertion
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
let dataType;
dataType = 5;
dataType = 'Hello...';
console.log(dataType);
dataType.length;
dataType.length; // this formate not work in [.tsx] file format...
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const kgToGram = (data) => {
    if (typeof data === "number")
        return data * 1000;
    if (typeof data === "string")
        return `Converted into gm: ${+data * 1000}`;
};
const result1 = kgToGram(100);
const result2 = kgToGram("100");
const result3 = kgToGram(50); // this formate not work in [.tsx] file format...
const result4 = kgToGram("50"); // this formate not work in [.tsx] file format...
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
try {
    const a = 0;
    console.log(a, '- Custom Error');
}
catch (error) {
    console.log(error.message);
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

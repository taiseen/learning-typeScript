"use strict";
// by using "keyof", one generic can force to other generic type
const personData = {
    name: 'Era',
    age: 20,
};
// type functionType = <A, B extends keyof A>(personObj: A, key: B) => A[B]
// B = 'name' | 'age'  // <== dynamically union type...
const getUserPropertyValue = (personObj, key) => {
    return personObj[key];
};
const getPV = getUserPropertyValue(personData, 'name');
console.log(getPV);
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// Quiz Question...
function getArrayItem(arr, index, key) {
    const item = arr[index];
    return item[key];
}
const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
console.log(getArrayItem(users, 0, 'name'));

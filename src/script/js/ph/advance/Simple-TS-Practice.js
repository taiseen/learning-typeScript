"use strict";
// 06 - May - 2023
const userInfo1 = [101, "Ema", "John", true, undefined, "2023"];
// console.log(userInfo1);
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 No 2:- 🔴🔴🔴 
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// function that compare arrays & return a new array with common values...
const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 8];
const compareArrays = (arr1, arr2) => {
    return arr1.filter(num => arr2.includes(num));
};
const products = [
    { id: 101, name: 'Apple', price: 40_000, category: 'Phone' },
    { id: 102, name: 'Lenovo', price: 80_000, category: 'Laptop' },
    { id: 103, name: 'Samsung', price: 30_000, category: 'Phone' },
];
// Write a TypeScript generic function that takes this array, a criterion, and returns a new array 
// containing only the products that match the given criterion and value. 
// Use a generic type parameter in the function signature to ensure type safety.
const filterProducts = (// <== type safety
products, criterion, value) => {
    return products.filter(product => product[criterion] === value);
};
const filteredProducts = filterProducts(products, 'category', 'Phone');
const productPhone = [
    ['OnePlus-7T', 60_000, 5],
    ['Samsung-A5', 30_000, 8],
    ['IPhone-Pro', 90_000, 2],
];
const productBook = [
    ['Deep Work', 250, 6],
    ['Atomic Habit', 200, 9],
    ['The One Thing', 140, 6],
];
// --------------------- allow only this pattern of objects
const totalCostOfAllProduct = (productArray) => {
    // philosophy - consume all & create a single value... 
    // Approach - 1
    // let totalCost = 0;
    // productArray.forEach(productInfo => {
    //     totalCost = totalCost + productInfo[1] * productInfo[2];
    // })
    // return totalCost;
    // Approach - 2                                                total cost of all the products
    return productArray.reduce((total, [name, price, quantity]) => total + price * quantity, 0);
};
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = (numArr) => {
    return numArr.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
};
const personsObjectArray = [
    { name: 'Jon', age: 26, email: 'jon@gmail.com' },
    { name: 'Sam', age: 28, email: 'sam@gmail.com' },
    { name: 'Neo', age: 24, email: 'neo@gmail.com' },
];
// array of generic type T, which "must have" an (email) property of (type string)
const findByEmail = (objArr, email) => {
    const person = objArr.find((obj) => obj.email.toLowerCase() === email.toLowerCase());
    return person || null;
};
const r1 = findByEmail(personsObjectArray, 'SAM@gmail.com');
// console.log(r1);
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 No 7:- 🔴🔴🔴 
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// Use the spread operator to pass the elements of the array as arguments to a function 
// that finds the minimum and maximum values of the array. 
// Use destructuring to assign the minimum and maximum values to separate variables, 
// and log them to the console
const findMinMax = (...numbers) => {
    // const min = Math.min(...num);
    // const max = Math.max(...num);
    let min = numbers[0];
    let max = numbers[0];
    numbers.forEach(num => {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    return [min, max];
};
const [minimum, maximum] = findMinMax(...numberArray);
const logColor = (color, uppercase) => {
    const output = uppercase ? color.toUpperCase() : color.toLowerCase();
    console.log(output);
};
logColor("red"); // logs "red"
logColor("green", true); // logs "GREEN"
logColor("blue", false); // logs "blue"

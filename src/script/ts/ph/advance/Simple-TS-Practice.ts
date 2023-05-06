// 06 - May - 2023

// Simple-TS-Practice

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 No 1:- 🔴🔴🔴 
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴

// Convert this JS array into a TS tuple...
// const userInfo = [101, "Ema", "John", true,  , "2023"];

type UserInfo = [number, string, string, boolean, undefined, string];

const userInfo1: UserInfo = [101, "Ema", "John", true, undefined, "2023"];
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

const compareArrays = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter(num => arr2.includes(num));
}

// console.log(compareArrays(array1, array2));

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 No 3:- 🔴🔴🔴 
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

const products: Product[] = [
    { id: 101, name: 'Apple', price: 40_000, category: 'Phone' },
    { id: 102, name: 'Lenovo', price: 80_000, category: 'Laptop' },
    { id: 103, name: 'Samsung', price: 30_000, category: 'Phone' },
];

// Write a TypeScript generic function that takes this array, a criterion, and returns a new array 
// containing only the products that match the given criterion and value. 
// Use a generic type parameter in the function signature to ensure type safety.

const filterProducts = <T extends keyof Product>( // <== type safety
    products: Product[],
    criterion: T,
    value: Product[T]
): Product[] => {
    return products.filter(product => product[criterion] === value);
}

const filteredProducts = filterProducts<'category'>(products, 'category', 'Phone');

// console.log(filteredProducts)


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 No 4:- 🔴🔴🔴 
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴

// Suppose you have an array of tuples, 
// where each tuple represents a product and contains the product name, price, and quantity. 
// Write a TypeScript function that calculates the (total cost of all the products) in the array, 
// using a (generic type) for the tuple and a (type alias) for the array.

// tuple type
type productType = [string, number, number];

const productPhone: productType[] = [
    ['OnePlus-7T', 60_000, 5],
    ['Samsung-A5', 30_000, 8],
    ['IPhone-Pro', 90_000, 2],
];

const productBook: productType[] = [
    ['Deep Work', 250, 6],
    ['Atomic Habit', 200, 9],
    ['The One Thing', 140, 6],
];

// --------------------- allow only this pattern of objects
const totalCostOfAllProduct = <T extends productType>(productArray: T[]): number => {

    // philosophy - consume all & create a single value... 

    // Approach - 1
    // let totalCost = 0;
    // productArray.forEach(productInfo => {
    //     totalCost = totalCost + productInfo[1] * productInfo[2];
    // })
    // return totalCost;

    // Approach - 2                                                total cost of all the products
    return productArray.reduce((total, [name, price, quantity]) => total + price * quantity, 0);
}

// console.log(totalCostOfAllProduct(productPhone));
// console.log(totalCostOfAllProduct(productBook));

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 No 5:- 🔴🔴🔴 
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴

// an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array.

type arrayType = number[];

const numberArray: arrayType = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumber = (numArr: number[]): number => {
    return numArr.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
}

// console.log(evenNumber(numberArray));

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 No 6:- 🔴🔴🔴 
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴

// Create an interface called IPerson that includes properties for name, age and email
// Then create an array of Person objects and 
// write a function that (takes the array) and a (string email) as parameters, 
// and returns the (Person object) that matches the email or null if no match is found.

interface IPerson {
    name: string
    age: number
    email: string
}

const personsObjectArray: IPerson[] = [
    { name: 'Jon', age: 26, email: 'jon@gmail.com' },
    { name: 'Sam', age: 28, email: 'sam@gmail.com' },
    { name: 'Neo', age: 24, email: 'neo@gmail.com' },
]

// array of generic type T, which "must have" an (email) property of (type string)
const findByEmail = <T extends { email: string }>
    (objArr: T[], email: string): T | null => {
    const person = objArr.find((obj: T) => obj.email.toLowerCase() === email.toLowerCase());
    return person || null;
}

const r1 = findByEmail<IPerson>(personsObjectArray, 'SAM@gmail.com');
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

const findMinMax = (...numbers: arrayType): [number, number] => {
    // const min = Math.min(...num);
    // const max = Math.max(...num);
    let min = numbers[0];
    let max = numbers[0];

    numbers.forEach(num => {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });

    return [min, max];
}

const [minimum, maximum] = findMinMax(...numberArray);

// console.log("Minimum value:", minimum);
// console.log("Maximum value:", maximum);

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴
// 🔴🔴🔴 No 8:- 🔴🔴🔴
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴

// declares a function that takes a string parameter 
// with a literal type of "red", "green", or "blue", 
// and an optional boolean parameter. 
// If the boolean parameter is true, log the string parameter in uppercase. 
// If the boolean parameter is false or not provided, log the string parameter in lowercase.

type ColorType = "red" | "green" | "blue";

const logColor = (color: ColorType, uppercase?: boolean) => {
    const output = uppercase ? color.toUpperCase() : color.toLowerCase();
    console.log(output);
}

logColor("red"); // logs "red"
logColor("green", true); // logs "GREEN"
logColor("blue", false); // logs "blue"

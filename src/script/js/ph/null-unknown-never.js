"use strict";
// ✅ null type
const searchName = (name) => {
    name === null
        ? console.log('Nothing to search...')
        : console.log('Searching...');
};
searchName('taiseen');
searchName(null);
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ✅ unknown type
// value type absent at ==> compile-time, but 
// value type present at ==> run-time...
// so "unknown" type is more strict & enforces type safety at run-time...
// “any” is a type that can be assigned any value, while...
// “unknown” is a type that can only be assigned a value ==> after a run-time check.
const getCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const carSpeed = (speed * 1000) / 3600;
        const output = `My car speed is : ${carSpeed}`;
        console.log(output);
    }
    else if (typeof speed === 'string') {
        const [value] = speed.split(' ');
        const carSpeed = (+value * 1000) / 3600;
        const output = `My car speed is : ${carSpeed}`;
        console.log({ output });
    }
    else {
        console.log('Wrong type of car speed...');
    }
};
getCarSpeed(10);
getCarSpeed('10 kmh^-1');
getCarSpeed(true);
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ✅ never type
const throwError = (message) => {
    throw new Error(message);
};
// throwError('Error happen... 🔴🔴🔴');

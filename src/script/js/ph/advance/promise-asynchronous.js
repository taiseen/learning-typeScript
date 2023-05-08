"use strict";
// 05 - May - 2023
// Promise Asynchronous 
const makePromiseString = () => {
    return new Promise((resolve, reject) => {
        const data = 'Moke data fetching...';
        data
            ? resolve(data)
            : reject('error: at data fetching time...');
    });
};
const getString = async () => {
    const data = await makePromiseString();
    console.log(data);
};
getString();
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const makePromiseNumber = () => {
    return new Promise((resolve, reject) => {
        const data = 10_00_000;
        data
            ? resolve(data)
            : reject('error: at data fetching time...');
    });
};
const getNumber = async () => {
    const data = await makePromiseNumber();
    console.log(data);
};
getNumber();
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        data
            ? resolve(data)
            : reject('error: at data fetching time...');
    });
};
const getBoolean = async () => {
    const data = await makePromiseBoolean();
    console.log(data);
};
getBoolean();
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { name: 'Zen' };
        data
            ? resolve(data)
            : reject(new Error('error: at data fetching time...'));
    });
};
const getObject = async () => {
    const data = await makePromiseObject();
    console.log(data);
};
getObject();
const getDataFormJsonPlaceHolder = async () => {
    // 🔴 node v-18.16.0 "fetch" support by default... 🔴
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
};
const getData = async () => {
    const data = await getDataFormJsonPlaceHolder();
    console.log(data);
};
getData();

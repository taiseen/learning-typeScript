"use strict";
// 05 - May - 2023
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Promise Asynchronous 
const makePromiseString = () => {
    return new Promise((resolve, reject) => {
        const data = 'Moke data fetching...';
        data
            ? resolve(data)
            : reject('error: at data fetching time...');
    });
};
const getString = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseString();
    console.log(data);
});
getString();
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const makePromiseNumber = () => {
    return new Promise((resolve, reject) => {
        const data = 1000000;
        data
            ? resolve(data)
            : reject('error: at data fetching time...');
    });
};
const getNumber = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseNumber();
    console.log(data);
});
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
const getBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    console.log(data);
});
getBoolean();
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { name: 'Zen' };
        data
            ? resolve(data)
            : reject(new Error('error: at data fetching time...'));
    });
};
const getObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    console.log(data);
});
getObject();
const getDataFormJsonPlaceHolder = () => __awaiter(void 0, void 0, void 0, function* () {
    // 🔴 node v-18.16.0 "fetch" support by default... 🔴
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return yield response.json();
});
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getDataFormJsonPlaceHolder();
    console.log(data);
});
getData();

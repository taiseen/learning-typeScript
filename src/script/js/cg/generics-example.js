"use strict";
/*
    07 - May - 2023
    Typescript in Hindi | Crash Course | Coders Gyan
    https://youtu.be/F5pjG-sP0c8
*/
(() => {
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    // 🔴🔴🔴 normal approach... 🔴🔴🔴
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    // function lgString(arg: string) {
    //     console.log(arg);                   // <== 🔴 repeating code...
    //     return arg;                         // <== 🔴 repeating code...
    // }
    // function lgNumber(arg: number) {
    //     console.log(arg);                   // <== 🔴 repeating code...
    //     return arg;                         // <== 🔴 repeating code...
    // }
    // function lgBoolean(arg: boolean) {
    //     console.log(arg);                   // <== 🔴 repeating code...
    //     return arg;                         // <== 🔴 repeating code...
    // }
    // function lgArray(arg: any[]) {
    //     console.log(arg);                   // <== 🔴 repeating code...
    //     return arg;                         // <== 🔴 repeating code...
    // }
    // function lgObject(arg: object) {
    //     console.log(arg);                   // <== 🔴 repeating code...
    //     return arg;                         // <== 🔴 repeating code...
    // }
    // lgBoolean(true)
    // lgString('Sam')
    // lgNumber(80_000)
    // lgObject({ day: 'Sunday' })
    // lgArray(['a', 'b', 'c'])
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    // 🔴🔴🔴 using generic <type> with function - approach 🔴🔴🔴
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
    function lg(arg) {
        console.log(arg);
        return arg;
    }
    lg(5);
    lg(false);
    lg('Don');
    lg({ age: 26 });
    lg(['sun', 'mon']);
    lg([100, 450]);
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    const baseURL = 'http://example.com/';
    // ✊ fixed for IUser...
    // const fetchUser = async (path: string): Promise<IUser[]> => {
    //     const response = await fetch(baseURL + path);
    //     return response.json();
    // }
    // ✊ fixed for IPost...
    // const fetchPost = async (path: string): Promise<IPost[]> => {
    //     const response = await fetch(baseURL + path);
    //     return response.json();
    // }
    // 🔴🔴🔴 "target": "es2016" ==> to ==> "target": "esnext" at [tsconfig.json file]
    // 🔴🔴🔴 for async/await native support...
    // 🖐️ open for all type by using <generic type> at calling time...
    // in node.js v16 fetch() is not supported by default, but...
    // in node.js v18 fetch() is ✅ supported by default
    const fetchData = async (path) => {
        const response = await fetch(baseURL + path);
        return response.json();
    };
    (async () => {
        // const users = await fetchUser('users');
        // console.log(users[0]);
        // const posts = await fetchPost('posts');
        // console.log(posts[0]);
        const users = await fetchData('users');
        const posts = await fetchData('posts');
        console.log(users[0]);
        console.log(posts[0]);
    })();
    const numberOrderList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const stringOrderList = ['apple', 'orange', 'mango', 'jackfruit'];
    const objectOrderList = [{ name: 'Jon' }, { name: 'Neo' }, { name: 'Taj' }, { name: 'Era' }];
    // const removeFirstOrder = (orderList: number[]): [number, number[]] => {
    //     const removeItem = orderList.shift() as number;
    //     return [removeItem, orderList];
    // }
    // console.log(removeFirstOrder(numberOrderList));
    // console.log(removeFirstOrder([]));
    const removeFirstOrder = (orderList) => {
        const removeItem = orderList.shift();
        // const removeItem = orderList.shift() as T;              // <== 🔴🔴🔴sometime using "as" is not good practice
        // if (removeItem === undefined) {
        //     throw new Error('Cannot remove first item from an empty list');
        // }
        return [removeItem, orderList];
    };
    const functionCalls = [
        removeFirstOrder(numberOrderList),
        removeFirstOrder(stringOrderList),
        removeFirstOrder(objectOrderList),
        removeFirstOrder([]),
    ];
    functionCalls.forEach(fun => {
        const [removeItem, orderList] = fun;
        console.log('removeItem \t==>', removeItem);
        console.log('orderList \t==>', orderList);
    });
    const meal1 = { price: 20, size: 3 };
    const meal2 = { price: 20, size: 'large' };
    console.log(meal1);
    console.log(meal2);
})();

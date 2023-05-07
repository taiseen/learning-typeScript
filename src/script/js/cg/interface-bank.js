"use strict";
/*
    07 - May - 2023
    Typescript in Hindi | Crash Course | Coders Gyan
    https://youtu.be/F5pjG-sP0c8
*/
(() => {
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    const tran1 = {
        sender: 101,
        receiver: 202,
        amount: 200,
    };
    const tran2 = {
        sender: 101,
        receiver: 555,
        amount: 100,
    };
    const tran3 = {
        sender: 101,
        receiver: 600,
        amount: 350,
    };
    const tran4 = {
        sender: 101,
        receiver: 850,
        amount: 450,
    };
    const account = {
        id: 101,
        holder: 'Jon',
        balance: 50000,
        isActive: true,
        transaction: [tran1, tran2, tran3, tran4]
    };
    console.log(account);
})();

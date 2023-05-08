"use strict";
/*
    07 - May - 2023
    Typescript in Hindi | Crash Course | Coders Gyan
    https://youtu.be/F5pjG-sP0c8
*/
(() => {
    // interface like guard or contract too restrictive to object shape 
    // you can actually maintain the required properties... 
    // and if add any additional properties to be added at future 
    // then creating it by a [key with a type of string] with a (value type of any)
    // so now those existing will be required 
    // but you can also add any additional property that you want to this object
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // const tran1: ITransaction = { ... }
    // const tran2: ITransaction = { ... }
    // const tran3: ITransaction = { ... }
    // const tranN: ITransaction = { ... }
    // const transactionList: ITransaction[] = [tran1, tran2, tran3, tranN, ...]
    const transactionList = [
        { sender: 101, receiver: 600, amount: 350 },
        { sender: 101, receiver: 850, amount: 450 },
        { sender: 101, receiver: 555, amount: 100 },
        { sender: 101, receiver: 202, amount: 200 },
        { sender: 101, receiver: 340, amount: 400 },
    ];
    const account = {
        id: 101,
        holder: 'Jon',
        balance: 50_000,
        isActive: true,
        transaction: transactionList,
        futurePropertySupportWith: 'anyDataType...', // 🔴🔴🔴 future property support with any data type
    };
    console.log(account);
    const totalTransactionAmount = (allTransaction) => {
        return allTransaction.reduce((total, obj) => total += obj.amount, 0);
    };
    const totalSend = totalTransactionAmount(transactionList);
    console.log({ totalSend });
    const currentBalance = (currentAmount, totalSend) => {
        return currentAmount - totalSend;
    };
    const availableBalance = currentBalance(account.balance, totalSend);
    console.log({ availableBalance });
    account.balance = availableBalance;
    console.log(account);
})();

/*
    07 - May - 2023
    Typescript in Hindi | Crash Course | Coders Gyan
    https://youtu.be/F5pjG-sP0c8
*/


(() => {

    // we can call this interface also "contract" 🤝 for an object...
    interface ITransaction {
        sender: number;
        receiver: number;
        amount: number
    }

    interface IBankAccount {
        id: number;
        holder: string;
        balance: number;
        isActive: boolean;
        transaction: ITransaction[];
    }

    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
    // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

    const tran1: ITransaction = {
        sender: 101,
        receiver: 202,
        amount: 200,
    }
    const tran2: ITransaction = {
        sender: 101,
        receiver: 555,
        amount: 100,
    }
    const tran3: ITransaction = {
        sender: 101,
        receiver: 600,
        amount: 350,
    }
    const tran4: ITransaction = {
        sender: 101,
        receiver: 850,
        amount: 450,
    }

    const account: IBankAccount = {
        id: 101,
        holder: 'Jon',
        balance: 50_000,
        isActive: true,
        transaction: [tran1, tran2, tran3, tran4]
    }

    console.log(account);

})();
"use strict";
// 05 - May - 2023
// Access Modifiers: Public, Private, (Protected)
(() => {
    class BankAccount {
        id;
        name;
        _balance;
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        getBalance() {
            console.log('Current Balance: ' + this._balance);
        }
        addBalance(balance) {
            this._balance += balance;
        }
    }
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    const account = new BankAccount('101', 'Jon', 4_000);
    console.log(account);
    account.getBalance();
    account.addBalance(500);
    account.getBalance();
    console.log(account);
})();

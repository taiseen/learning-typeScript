"use strict";
// 05 - May - 2023
// Access Modifiers: Public, Private, (Protected)
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
class BankAccount1 {
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
const account1 = new BankAccount1('101', 'Jon', 4000);
console.log(account1);
account1.getBalance();
account1.addBalance(500);
account1.getBalance();
console.log(account1);

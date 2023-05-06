"use strict";
// 05 - May - 2023
// Getters and Setters
class BankAccount2 {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // no function calling approach...
    // access or assign like normal property...
    get balance() {
        return this._balance;
    }
    get amount() {
        return this.getAmount();
    }
    set deposit(amount) {
        this._balance += amount;
    }
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    getAmount() {
        return this._balance;
    }
    getBalance() {
        return 'Current Balance: ' + this._balance.toLocaleString();
    }
    addBalance(balance) {
        this._balance += balance;
    }
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const account2 = new BankAccount2('504', 'Kem', 75000);
console.log(account2);
console.log(account2.getBalance());
account2.addBalance(20000);
console.log(account2);
console.log(account2.balance);
account2.deposit = 10000;
console.log(account2);
console.log(account2.getBalance());
console.log(account2.amount);

"use strict";
// 05 - May - 2023
// Getters and Setters
class BankAccount {
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
const account = new BankAccount('504', 'Kem', 75000);
console.log(account);
console.log(account.getBalance());
account.addBalance(20000);
console.log(account);
console.log(account.balance);
account.deposit = 10000;
console.log(account);
console.log(account.getBalance());
console.log(account.amount);

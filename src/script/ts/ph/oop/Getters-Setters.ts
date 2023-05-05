// 05 - May - 2023

// Getters and Setters

class BankAccount2 {
    public readonly id: string;
    public readonly name: string;
    private _balance: number;

    constructor(id: string, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    // no function calling approach...
    // access or assign like normal property...

    get balance(): number {
        return this._balance;
    }

    set deposit(amount: number) {
        this._balance += amount;
    }

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    getBalance(): string {
        return 'Current Balance: ' + this._balance.toLocaleString();
    }

    addBalance(balance: number): void {
        this._balance += balance;
    }
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

const account2 = new BankAccount2('504', 'Kem', 75_000);

console.log(account2);
console.log(account2.getBalance());

account2.addBalance(20_000);

console.log(account2);
console.log(account2.balance);

account2.deposit = 10_000

console.log(account2);
console.log(account2.getBalance());
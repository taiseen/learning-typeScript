// 05 - May - 2023

// Getters and Setters

class BankAccount {
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

    get balance(): number {         // <== 🟢🟢🟢 Encapsulation
        return this._balance;       
    }

    get amount(): number {          // <== 🟢🟢🟢 Encapsulation
        return this.getAmount()
    }

    set deposit(amount: number) {   // <== 🟢🟢🟢 Encapsulation
        this._balance += amount;
    }

    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

    private getAmount(): number {           // <== 🟢🟢🟢 Encapsulation
        return this._balance;
    }

    getBalance(): string {                  // <== 🟢🟢🟢 Encapsulation
        return 'Current Balance: ' + this._balance.toLocaleString();
    }

    addBalance(balance: number): void {     // <== 🟢🟢🟢 Encapsulation
        this._balance += balance;
    }
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

const account = new BankAccount('504', 'Kem', 75_000);

console.log(account);
console.log(account.getBalance());

account.addBalance(20_000);

console.log(account);
console.log(account.balance);

account.deposit = 10_000

console.log(account);
console.log(account.getBalance());

console.log(account.amount);
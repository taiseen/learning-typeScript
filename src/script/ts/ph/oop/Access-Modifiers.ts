// 05 - May - 2023

// Access Modifiers: Public, Private, (Protected)

(() => {

    class BankAccount {
        public readonly id: string;
        public readonly name: string;
        private _balance: number;

        constructor(id: string, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        getBalance() {
            console.log('Current Balance: ' + this._balance);
        }

        addBalance(balance: number): void {
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

})()
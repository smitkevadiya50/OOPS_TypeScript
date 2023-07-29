class BankAccount {
    // private member variables, representing the balance and account number.
    private balance: number;
    private accountNumber: number;
    private transactions: number[];

    // Using the constructor for encapsulation. It initializes the balance, account number and transactions array.
    constructor(accountNumber: number, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactions = [];
    }

    // Encapsulating deposit operation.
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push(amount);
            console.log(`Deposit: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount!");
        }
    }

    // Encapsulating withdrawal operation.
    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push(-amount);
            console.log(`Withdrawal: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid or insufficient funds for withdrawal!");
        }
    }

    // Encapsulating the operation of getting the balance.
    public getBalance(): number {
        return this.balance;
    }

    // Encapsulating the operation of printing account statement.
    public printStatement(): void {
        console.log(`Account Statement for Acc No: ${this.accountNumber}`);
        console.log("-------------------------------------");

        for(let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i] >= 0) {
                console.log(`Deposit: $${this.transactions[i]}`);
            } else {
                console.log(`Withdrawal: $${-this.transactions[i]}`);
            }
        }

        console.log(`Final Balance: $${this.balance}`);
    }
}

// Usage
let account: BankAccount = new BankAccount(123456, 500);
account.deposit(100);
account.withdraw(200);
account.deposit(300);
account.printStatement();

/* Output:

Deposit: $100. New balance: $600
Withdrawal: $200. New balance: $400
Deposit: $300. New balance: $700
Account Statement for Acc No: 123456
-------------------------------------
Deposit: $100
Withdrawal: $200
Deposit: $300
Final Balance: $700 */
// Access modifiers: public, private, protected

class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Invalid amt or Cant deposit");
    // Record a transaction
    this._balance += amount;
  }

  getBalance() {
    return this._balance;
  }

  private calcTax() {}
}

const account = new Account(1, "Me", 0);
account.deposit(100);
console.log(account.getBalance());

// Access modifiers: public, private, protected

class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

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

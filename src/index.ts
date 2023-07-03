class BankAccount {
  nickName?: string; //optional property, won't be initialized in constructor bsc optional.

  constructor(
    readonly id: number, // readonly modifier so that is readonly property
    public owner: string,
    private _balance: number
  ) {}

  //getter
  get Balance(): number {
    return this._balance;
  }

  //setter
  set Balance(amount: number) {
    this._balance = amount;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Invalid amount");
    this.Balance += amount;
  }
}

const b1 = new BankAccount(1, "Shri", 20);
console.log(b1.Balance);
b1.deposit(40);
console.log(b1.Balance);

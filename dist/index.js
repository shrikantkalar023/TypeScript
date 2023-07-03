"use strict";
class BankAccount {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get Balance() {
        return this._balance;
    }
    set Balance(amount) {
        this._balance = amount;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.Balance += amount;
    }
}
const b1 = new BankAccount(1, "Shri", 20);
console.log(b1.Balance);
b1.deposit(40);
console.log(b1.Balance);
//# sourceMappingURL=index.js.map
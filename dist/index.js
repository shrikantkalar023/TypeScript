"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amt or Cant deposit");
        this.balance += amount;
    }
}
const account = new Account(1, "Me", 0);
account.deposit(100);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map
"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Teacher extends Person {
    takeTest() {
        console.log("taking test");
    }
    get fullName() {
        return "Prof." + " " + this.firstName + " " + this.lastName;
    }
}
const s1 = new Teacher("Shrikant", "Kalar");
console.log(s1.fullName);
//# sourceMappingURL=index.js.map
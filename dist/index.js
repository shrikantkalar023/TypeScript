"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walks() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(firstName, lastName, studentId) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking test");
    }
}
const p1 = new Person("Mark", "Rober");
console.log(p1.fullName);
const s1 = new Student("Mark", "Rober", "dasf2");
console.log(s1.fullName, s1.studentId);
p1.walks();
s1.takeTest();
//# sourceMappingURL=index.js.map
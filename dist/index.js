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
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    givesTest() {
        console.log("giving test");
    }
    get fullName() {
        return "Student " + super.fullName;
    }
}
const s1 = new Student(1, "Ashwini", "Kalar");
class Teacher extends Person {
    takesTest() {
        console.log("takes test");
    }
    get fullName() {
        return "Prof. " + super.fullName;
    }
}
const t1 = new Teacher("Shrikant", "Kalar");
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([t1, s1, new Person("Sunil", "Kalar")]);
//# sourceMappingURL=index.js.map
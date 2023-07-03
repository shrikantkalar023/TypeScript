// Inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walks() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(firstName: string, lastName: string, public studentId: string) {
    super(firstName, lastName);
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

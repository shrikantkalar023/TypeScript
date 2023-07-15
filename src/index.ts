// Polymorphism is automatically implemented by method overriding.

// Open Closed Principle:- Classes should be open(inherit,extend) for 'extension' & closed for 'modification'.

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  givesTest() {
    console.log("giving test");
  }

  override get fullName() {
    return "Student " + super.fullName;
  }
}

const s1 = new Student(1, "Ashwini", "Kalar");

class Teacher extends Person {
  takesTest() {
    console.log("takes test");
  }

  override get fullName() {
    return "Prof. " + super.fullName;
  }
}

const t1 = new Teacher("Shrikant", "Kalar");
// console.log(s1.fullName);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([t1, s1, new Person("Sunil", "Kalar")]);

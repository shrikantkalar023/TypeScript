// Just need to add override modifier in front of new overridden method.

class Person {
  constructor(public firstName: string, public lastName: string) {}

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

  override get fullName() {
    return "Prof." + " " + this.firstName + " " + this.lastName;
  }
}

const s1 = new Teacher("Shrikant", "Kalar");
console.log(s1.fullName);

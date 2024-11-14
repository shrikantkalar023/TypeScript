// function echo<T extends number | string>(value: T): T {
//   return value;
// }

// interface IPerson {
//   name: string;
// }
// function echo<T extends IPerson>(value: T): T {
//   return value;
// }

class Person {
  constructor(public name: string) {}
}
class Customer extends Person {}

function echo<T extends Person>(value: T): T {
  return value;
}
// echo({ name: "asdf" });
// echo(new Person('asd'));
echo(new Customer("asdo"));

// Type Assertions: we know more about the type of obj

// 2 syntax
// let phone = document.getElementById('phone') as HTMLInputElement
let phone = <HTMLInputElement>document.getElementById("phone");

// HTMLElement -> HTMLInputElement

phone.value;

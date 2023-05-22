// never type.. to identify unreachable code

function processEvents(): never {
  while (true) {}
}

processEvents();
console.log("hello");

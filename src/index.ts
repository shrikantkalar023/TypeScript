// Null types : by default TS compiler stops us from using 'null' or 'undefined' values

function greet(name: string | null | undefined) {
  console.log(name?.toUpperCase());
}

greet(undefined);

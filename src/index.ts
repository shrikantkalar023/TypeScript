// enums r list of related constants

// const small=1
// const medium=2
// const large=3

// PascalCase
const enum Size { // using const produces more optimized JS code
  Small = 1,
  Medium,
  Large,
} // small by def has 0 value.
let mySize: Size = Size.Medium;
console.log(mySize);

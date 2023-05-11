// Union types ... more than one type
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  return parseInt(weight) * 2.2;
}

console.log(
  kgToLbs(10),

  kgToLbs("10kg")
);

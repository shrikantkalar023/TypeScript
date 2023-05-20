let speed: number | null = null;
let ride = {
  // Falsy values (undefined, null, '', false, 0)
  // Nullish Coaelscing Operator......the value can be (none or undefined)

  speed: speed ?? 30, // if speed is not none or undefined use that value otherwise use 30 as default value
};

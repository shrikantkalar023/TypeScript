// Tuple: fixed len array, where each ele has particular type

// Tuples r internally represented using plain JS arrays

// Best Practice: use tuples only for 2 elements

const user: [number, string] = [1, "Shri"];

user.push(3); // this method causes issue with TS

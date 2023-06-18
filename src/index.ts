// To dynamically assign properties to an object we use 'Index Signatures'.

class SeatAssignment {
  // Index Signature property
  [seatNumber: string]: string;
}

let seat = new SeatAssignment();
seat.A1 = "Me";
seat.A2 = "You";
console.log(seat);

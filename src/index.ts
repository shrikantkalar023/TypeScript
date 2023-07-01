// Static property belongs to CLASS, so only 1 instance of it in memory.

class Ride {
  private static _activeRide: number = 0;

  start() {
    Ride._activeRide++;
  }
  stop() {
    Ride._activeRide--;
  }

  static get activeRides() {
    return Ride._activeRide;
  }
}

let ride1 = new Ride();
let ride2 = new Ride();

console.log(Ride.activeRides);

ride1.start();
ride2.start();
ride1.stop();
console.log(Ride.activeRides);

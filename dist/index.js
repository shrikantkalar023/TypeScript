"use strict";
class Ride {
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
Ride._activeRide = 0;
let ride1 = new Ride();
let ride2 = new Ride();
console.log(Ride.activeRides);
ride1.start();
ride2.start();
ride1.stop();
console.log(Ride.activeRides);
//# sourceMappingURL=index.js.map
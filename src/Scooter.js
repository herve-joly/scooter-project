const User = require("./User");

class Scooter {
  // scooter code here
  constructor(station) {
    this.user = null;
    this.station = station;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }
  rent() {
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = User;
    }

    if (this.isBroken === true) {
      throw new Error("scooter need repair");
    } else if (this.charge < 20) {
      throw new Error("scooter needs to charge");
    }
  }
  dock(station) {
    this.station = station;
    this.user = null;
  }
}

module.exports = Scooter;

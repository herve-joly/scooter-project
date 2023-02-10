const User = require("./User");

class Scooter {
  // scooter code here
  constructor(station) {
    this.user = null;
    this.station = station;
    this.serial = this.nextSerial;
    // this.nextSerial += 1;
    this.charge = 100;
    this.isBroken = false;
  }
  rent() {
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = user;
    }
    if (this.isBroken === true) {
      throw new Error("scooter need repair");
    } else if (this.charge < 20) {
      throw new Error("scooter needs to charge");
    }
  }
}

module.exports = Scooter;

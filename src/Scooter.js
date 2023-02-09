class Scooter {
  // scooter code here
  constructor(user) {
    this.user = user;
    this.station = "";
    this.serial = 0;
    this.nextSerial += 1;
    this.charge = 100;
    this.isBroken = false;
  }
  rent() {
    if (this.charge <= 20 && !this.isBroken) {
    }
  }
  dock(station) {}
}

module.exports = Scooter;

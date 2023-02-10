const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      station: [],
    };
    this.registeredUser = { username: User };
  }
  registerUser(User) {
    this.registeredUser.username = User.username;
  }
}

module.exports = ScooterApp;

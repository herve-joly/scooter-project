const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here
test("testing ScooterApp is an object ", () => {
  const scooterapp1 = new ScooterApp();
  expect(typeof scooterapp1).toBe("object");
});
// register user
test("test register user", () => {
  const scooterapp1 = new ScooterApp();
  registerUser(User);
  expect(scooterapp1.registerUser).toBe(User);
});
// log in

// log out

// rent scooter

// dock scooter

const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  const scooter1 = new Scooter(null);
  test("if is an object", () => {
    // edit this to be a real test!
    expect(typeof scooter1).toBe("object");
  });
  test("if rent works", () => {
    const scooter2 = new Scooter("user");
    expect(scooter2.rent()).toBe("user");
  });
});

//Method tests
describe("scooter methods", () => {
  // tests here!
  //rent method
  //dock method
  //requestRepair method
  //charge method
});

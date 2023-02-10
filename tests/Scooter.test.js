const Scooter = require("../src/Scooter");
const User = require("../src/User");

describe("Constructor", () => {
  //typeof scooter === object
  test("if is an object", () => {
    const scooter1 = new Scooter("Northampton");
    // edit this to be a real test!
    expect(typeof scooter1).toBe("object");
  });
  //Test Scooter properties
  test("test user", () => {
    const scooter2 = new Scooter("Norwich");
    expect(scooter2.user).toBe(null);
  });
  test("test stations", () => {
    const scooter1 = new Scooter("Northampton");
    expect(scooter1.station).toBe("Northampton");
  });
  test("test charge", () => {
    const scooter2 = new Scooter("Norwich");
    expect(scooter2.charge).toBe(100);
  });
  test("test if scooter is broken", () => {
    const scooter1 = new Scooter("Northampton");
    expect(scooter1.isBroken).toBe(false);
  });
  //test serial

  //test nextserial
});
//Method tests
describe("Method", () => {
  //test rent
  test("test if rent", () => {
    const scooter1 = new Scooter("Northampton");
    scooter1.rent();
    expect(scooter1.station).toBe(null);
  });
  test("testing rent()", () => {
    const scooter1 = new Scooter("Northampton");
    scooter1.rent();
    expect(scooter1.user).toEqual(User);
  });
  //requestRepair method
  test("throw error if broken", () => {
    const scooter2 = new Scooter("Norwich");
    scooter2.isBroken = true;
    expect(() => {
      scooter2.rent();
    }).toThrowError(new Error("scooter need repair"));
  });
  //charge method
  test("throw error if need charge", () => {
    const scooter1 = new Scooter("Northampton");
    scooter1.charge = 10;
    expect(() => {
      scooter1.rent();
    }).toThrowError(new Error("scooter needs to charge"));
  });
  //test dock
  test("test dock()", () => {
    const scooter1 = new Scooter("Northampton");
    scooter1.user = User;
    scooter1.station = null;
    scooter1.dock("Northampton");
    expect(scooter1.user).toBe(null);
    expect(scooter1.station).toBe("Northampton");
  });
});

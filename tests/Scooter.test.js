const Scooter = require("../src/Scooter");
const User = require("../src/User");

describe("Testing Scooter Class", () => {
  const scooter1 = new Scooter("Northampton");
  const user3 = ("John", "passtest", 40);
  const user4 = ("Steven", "passtest2", 33);

  describe("Constructor", () => {
    //typeof scooter === object
    test("if is an object", () => {
      // edit this to be a real test!
      expect(typeof scooter1).toBe("object");
    });
    //Test Scooter properties
    test("test user", () => {
      expect(scooter1.user).toBe(null);
    });
    test("test stations", () => {
      expect(scooter1.station).toBe("Northampton");
    });
    test("test charge", () => {
      expect(scooter1.charge).toBe(100);
    });
    test("test if scooter is broken", () => {
      expect(scooter1.isBroken).toBe(false);
    });
    //test serial
    test("test serial", () => {
      expect(this.serial).toBe(this.nextSerial);
    });
    //test nextserial
    // test("test nextserial", () => {
    //   expect(this.nextSerial).toBe(1);
    // });
  });
  //Method tests
  describe("Method", () => {
    //test rent
    test("test if rent", () => {
      scooter1.charge = 60;
      scooter1.isBroken = false;
      scooter1.rent();
      expect(scooter1.station).toBe(null);
      expect(scooter1.user).toBe(user3);
    });
    //requestRepair method
    test("throw error if broken", () => {
      this.isBroken = true;
      expect(() => {
        scooter1.rent();
      }).toThrowError(new Error("scooter need repair"));
    });
    //charge method
    test("throw error if need charge", () => {
      this.charge < 20;
      expect(() => {
        scooter1.rent();
      }).toThrowError(new Error("scooter needs to charge"));
    });
    //test dock
    // test("test dock()", () => {
    //   scooter1.user(user3);
    //   scooter1.dock("Old Stratford");
    //   expect(scooter1.user).toBe(null);
    // });
  });
});

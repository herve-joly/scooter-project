const User = require("../src/User");

// User tests here
describe("User class testing", () => {
  const user1 = new User("Steve", "testing", 20);
  const user2 = new User("Gary", "testing", 30);

  describe("user properties", () => {
    test("testing if User is object", () => {
      expect(typeof user1).toBe("object");
    });
    // test username
    test("username test ", () => {
      expect(user1.username).toBe("Steve");
    });
    // test password
    test("password test", () => {
      expect(user1.password).toBe("testing");
    });
    // test age
    test("test age", () => {
      expect(user1.age).toBe(20);
    });
    //test loggedIn to be false
    test("test loggedIn", () => {
      expect(user2.loggedIn).toBe(false);
    });
  });
  describe("test methods", () => {
    user1.loggedIn = false;
    user1.login("testing");
    // test login
    test("test login with password", () => {
      expect(user1.loggedIn).toBe(true);
    });
    // test logout
    test("test logout", () => {
      user1.loggedIn = true;
      user1.logout();
      expect(user1.loggedIn).toBe(false);
    });
    expect(() => {
      user1.login("testingt");
    }).toThrow(new Error("incorrect password"));
  });
});

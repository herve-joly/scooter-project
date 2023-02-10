const User = require("../src/User");

// User tests here
describe("user properties", () => {
  const user1 = new User("Steve", "testing", 20);
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
    expect(user1.loggedIn).toBe(false);
  });
});
//test methods
describe("test methods", () => {
  // test login
  test("test login with password", () => {
    const user3 = new User("Steve2", "testingthis", 23);
    user3.login("testingthis");
    expect(user3.loggedIn).toBe(true);
  });
  test("test login error", () => {
    const user2 = new User("Gary", "testingit", 36);
    expect(() => {
      user2.login("testing");
    }).toThrow(new Error("incorrect password"));
  });
  // test logout
  test("test logout", () => {
    const user1 = new User("Steve", "testing", 20);
    user1.loggedIn = true;
    user1.logout();
    expect(user1.loggedIn).toBe(false);
  });
});

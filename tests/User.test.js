const User = require("../src/User");

// User tests here
describe("User test", () => {
  const user1 = new User("Steve", "testing", 20);
  const user2 = new User("Steve", "testingt", 20);
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
  // test login
  test("test login", () => {
    expect(user2.login(this.password)).toThrowError("incorrect password");
  });
  // test logout
  test("test logout", () => {
    expect(user1.logout()).toBe("true");
  });
});

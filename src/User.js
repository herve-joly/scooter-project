class User {
  // User code here
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
  }
  login(password) {
    if (password != this.password) {
      throw new Error("incorrect password");
    }
  }
  logout() {}
}

module.exports = User;

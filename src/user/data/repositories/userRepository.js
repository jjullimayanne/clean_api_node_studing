const inMemory = require("../../../infra/database/index.js");

class UserRepository {
  async add(user) {
    inMemory.users.push(user);
    return user;
  }

  async update(user) {
    const index = inMemory.users.findIndex((item) => item.id === user.id);
    if (index !== -1) {
      inMemory.users[index] = user;
      return user;
    }
    throw new Error("User not found");
  }

  async delete(user) {
    const index = inMemory.users.findIndex((item) => item.id === user.id);
    if (index !== -1) {
      const deletedUser = inMemory.users.splice(index, 1);
      return deletedUser[0];
    }
    throw new Error("User not found");
  }

  async getUserById(id) {
    const user = inMemory.users.find((item) => item.id === id);
    if (user) {
      return user;
    }
    throw new Error("User not found");
  }
}

module.exports = UserRepository;

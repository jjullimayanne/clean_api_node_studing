/* eslint-disable no-undef */
const { Chance } = require("chance");
const UserRepository = require("../../../../../../src/user/data/repositories/userRepository");
const inMemory = require("../../../../../../src/infra/database/index.js");
const chance = new Chance();
const {
  User,
} = require("../../../../../../src/user/domain/entities/userEntity");
// Instância do UserRepository para teste
const userRepository = new UserRepository(inMemory);

describe("UserRepository", () => {
  beforeEach(() => {
    inMemory.users = [];
  });

  test("add - adiciona um usuário", async () => {
    const userData = {
      name: chance.name(),
      lastName: chance.last(),
    };
    const user = new User(userData);

    await userRepository.add(user);

    const userReturned = await userRepository.getUserById(user.id);

    expect(userReturned).toEqual(user);
  });

  test("update - atualiza um usuário existente", async () => {
 
  });


});

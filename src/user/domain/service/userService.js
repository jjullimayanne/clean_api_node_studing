const { v4: uuidv4 } = require('uuidv4');

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async add(user) {
    if (!user.id) {
      user.id = uuidv4();
    }
    return await this.userRepository.add(user);
  }

  async update(user) {
    return await this.userRepository.update(user);
  }

  async delete(user) {
    return await this.userRepository.delete(user);
  }

  async getUserById(id) {
    return await this.userRepository.getUserById(id);
  }
}

module.exports = UserService;

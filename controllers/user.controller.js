const UserService = require("../services/user.service");

class UserController {
  async getAllUser() {
    let response = await UserService.getAllUser();
    return response;
  }
  async createUser(requestObject) {
    let response = await UserService.createUser(requestObject);
    return response;
  }
  async getOneUser(requestObject) {
    let response = await UserService.getOneUser(requestObject);
    return response;
  }
  async updateUser(requestObject) {
    let response = await UserService.updateUser(requestObject);
    return response;
  }
  async deleteUser(requestObject) {
    let response = await UserService.deleteUser(requestObject);
    return response;
  }
}

module.exports = new UserController();

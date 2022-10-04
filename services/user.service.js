const Response = require("../utils/response.utils");
const User = require("../models/Users");

class UserService extends Response {
  //get all user
  async getAllUser() {
    try {
      let exist = await User.findAll();
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, "Success!");
      } else {
        return this.RESPONSE(404, [], "No Record Found!");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }

  //get one user
  async getOneUser(requestObject) {
    try {
      let exist = await User.findOne({ where: { id: requestObject } });
      if (exist !== null) {
        return this.RESPONSE(200, exist, "Record found");
      } else {
        return this.RESPONSE(404, {}, "No record found");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }

  //create user
  async createUser(requestObject) {
    try {
      let exist = await User.findOne({ where: { name: requestObject.name } });
      if (exist == null) {
        let createData = await User.create(requestObject);
        if (createData != null) {
          return this.RESPONSE(200, createData, "User created successfully");
        } else {
          return this.RESPONSE(400, {}, "Failed to create record");
        }
      } else {
        return this.RESPONSE(200, exist, "Already exist");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }

  //update user
  async updateUser(requestObject) {
    try {
      let exist = await User.findOne({ where: { id: requestObject.id } });
      if (exist != null) {
        let updateData = await User.update(requestObject, {
          where: { id: requestObject.id },
        });
        if (updateData != null) {
          return this.RESPONSE(202, updateData, "Successfully updated");
        } else {
          return this.RESPONSE(400, {}, "failed to update data");
        }
      } else {
        return this.RESPONSE(404, {}, "record not found");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }

  //delete user
  async deleteUser(requestObject) {
    try {
      let exist = await User.findOne({ where: { id: requestObject } });
      if (exist != null) {
        let removeData = await User.destroy({ where: { id: requestObject } });
        if (removeData != null) {
          return this.RESPONSE(200, {}, "Successfully deleted");
        } else {
          return this.RESPONSE(400, {}, "failed to delete data");
        }
      } else {
        return this.RESPONSE(404, {}, "record not found");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }
}

module.exports = new UserService();

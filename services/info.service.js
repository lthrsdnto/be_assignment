const Response = require("../utils/response.utils");
const Info = require("../models/Infos");
const User = require("../models/Users");
const Task = require("../models/Tasks");

class InfoService extends Response {
  async getAllInfoByUserID() {
    try {
      let exist = await User.findAll({
        include: { model: Info, as: "info_data" },

        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, "Success!");
      } else {
        return this.RESPONSE(404, [], "No Record Found!");
      }
    } catch (error) {
      return this.RESPONSE(500, error, "Internal Server Error");
    }
  }

  async getInfoIDWithUserInfo(userID) {
    try {
      let exist = await Info.findOne({
        where: { id: userID },
        include: { model: User, as: "user_info" },
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, "Success!");
      } else {
        return this.RESPONSE(404, [], "No Record Found!");
      }
    } catch (error) {
      return this.RESPONSE(500, error, "Internal Server Error");
    }
  }

  async getAllInfo(offset, limit, sort, order) {
    try {
      let exist = await Info.findAll({
        offset: offset,
        limit: limit,
        order: sort[order],
      });
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, "Success!");
      } else {
        return this.RESPONSE(404, [], "No Record Found!");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }

  async createInfo(requestObject) {
    try {
      let exist = await Info.findOne({
        where: { email: requestObject.email },
      });
      if (exist == null) {
        let createData = await Info.create(requestObject);
        if (createData !== null) {
          return this.RESPONSE(
            200,
            createData,
            "Information created successfully"
          );
        } else {
          return this.RESPONSE(400, {}, "Failed to create Information");
        }
      } else {
        return this.RESPONSE(200, exist, "Information already exist");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }

  async updateInfo(requestObject) {
    try {
      let exist = await Info.findOne({ where: { id: requestObject.id } });
      if (exist != null) {
        let updateData = await Info.update(requestObject, {
          where: { id: requestObject.id },
        });
        if (updateData != null) {
          return this.RESPONSE(
            202,
            updateData,
            "Information update successfully"
          );
        } else {
          return this.RESPONSE(400, {}, "Failed to update Information");
        }
      } else {
        return this.RESPONSE(404, {}, "Information not found");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }

  async deleteInfo(requestObject) {
    try {
      let exist = await Info.findOne({ where: { id: requestObject } });
      if (exist != null) {
        let removeData = await Info.destroy({
          where: { id: requestObject },
        });
        if (removeData != null) {
          return this.RESPONSE(200, {}, "Information deleted successfully");
        } else {
          return this.RESPONSE(400, {}, "Failed to delete Information");
        }
      } else {
        return this.RESPONSE(404, {}, "Information not found");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }
}

module.exports = new InfoService();

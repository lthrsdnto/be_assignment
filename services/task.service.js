const Response = require("../utils/response.utils");
const Task = require("../models/Tasks");

class TaskService extends Response {
  async getAllTask() {
    try {
      let exist = await Task.findAll();
      if (exist.length != 0) {
        return this.RESPONSE(200, exist, "Success!");
      } else {
        return this.RESPONSE(404, [], "No Record Found!");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }

  async getOneTask(requestObject) {
    try {
      let exist = await Task.findOne({ where: { id: requestObject } });
      if (exist !== null) {
        return this.RESPONSE(200, exist, "Record found");
      } else {
        return this.RESPONSE(404, {}, "No record found");
      }
    } catch (error) {
      return this.RESPONSE(500, {}, "Internal Server Error");
    }
  }

  async createTask(requestObject) {
    try {
      let exist = await Task.findOne({ where: { todo: requestObject.todo } });
      if (exist == null) {
        let createData = await Task.create(requestObject);
        if (createData !== null) {
          return this.RESPONSE(200, createData, "Task created successfully");
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

  async updateTask(requestObject) {
    try {
      let exist = await Task.findOne({ where: { id: requestObject.id } });
      if (exist != null) {
        let updateData = await Task.update(requestObject, {
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

  async deleteTask(requestObject) {
    try {
      let exist = await Task.findOne({ where: { id: requestObject } });
      if (exist != null) {
        let removeData = await Task.destroy({ where: { id: requestObject } });
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

module.exports = new TaskService();

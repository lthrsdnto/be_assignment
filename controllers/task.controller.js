const TaskService = require("../services/task.service");

class TaskController {
  async getAllTask() {
    let response = await TaskService.getAllTask();
    return response;
  }
  async createTask(requestObject) {
    let response = await TaskService.createTask(requestObject);
    return response;
  }
  async getOneTask(requestObject) {
    let response = await TaskService.getOneTask(requestObject);
    return response;
  }
  async updateTask(requestObject) {
    let response = await TaskService.updateTask(requestObject);
    return response;
  }
  async deleteTask(requestObject) {
    let response = await TaskService.deleteTask(requestObject);
    return response;
  }
}

module.exports = new TaskController();

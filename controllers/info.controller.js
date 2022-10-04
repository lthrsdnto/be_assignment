const InfoService = require("../services/info.service");

class InfoController {
  async getAllInfoByUserID() {
    let response = await InfoService.getAllInfoByUserID();
    return response;
  }

  async getInfoIDWithUserInfo(userID) {
    let response = await InfoService.getInfoIDWithUserInfo(userID);
    return response;
  }

  async getAllInfo(requestObject) {
    let offset =
      requestObject.offset != null || requestObject.offset !== undefined
        ? parseInt(requestObject.offset)
        : 0;
    let limit =
      requestObject.limit != null || requestObject.limit !== undefined
        ? parseInt(requestObject.limit)
        : 5;
    let sort =
      requestObject.sort != null || requestObject.sort !== undefined
        ? parseInt(requestObject.sort)
        : "id";
    let order =
      requestObject.order != null || requestObject.order !== undefined
        ? parseInt(requestObject.order)
        : "ASC";
    let response = await InfoService.getAllInfo(offset, limit, sort, order);
    return response;
  }

  async createInfo(requestObject) {
    let response = await InfoService.createInfo(requestObject);
    return response;
  }

  async updateInfo(requestObject) {
    let response = await InfoService.updateInfo(requestObject);
    return response;
  }
  async deleteInfo(requestObject) {
    let response = await InfoService.deleteInfo(requestObject);
    return response;
  }
}

module.exports = new InfoController();

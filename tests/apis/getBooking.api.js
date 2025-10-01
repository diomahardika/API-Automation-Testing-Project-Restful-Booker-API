const { expect } = require("chai");
const request = require("supertest");
const data = require("../../config/config.js");

class getData {
  constructor() {
    this.host = data.baseUrl;
  }
  async getBookingData() {
    const response = await request(this.host)
      .get("/booking")
    return response;
  }
}

module.exports = getData;

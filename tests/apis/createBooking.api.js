const { expect } = require("chai");
const request = require("supertest");
const data = require("../../config/config.js");

class create {
  constructor() {
    this.host = data.baseUrl;
    this.contentType = data.headers.contentType;
    this.accept = data.headers.accept;
  }
  async createBooking(payload) {
    const response = await request(this.host)
      .post("/booking")
      .set("Content-Type", this.contentType)
      .set("Accept", this.accept)
      .send(payload);
    return response;
  }
}

module.exports = create;

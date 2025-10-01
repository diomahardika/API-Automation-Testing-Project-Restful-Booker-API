const { expect } = require("chai");
const request = require("supertest");
const data = require("../../config/config.js");

class auth {
  constructor() {
    this.host = data.baseUrl;
    this.contentType = data.headers.contentType;
  }
  async login(payload) {
    const response = await request(this.host)
      .post("/auth")
      .set("Content-Type", this.contentType)
      .send(payload);
    return response;
  }
}

module.exports = auth;

const { expect } = require("chai");
const request = require("supertest");
const data = require("../../config/config.js");

class update {
  constructor() {
    this.host = data.baseUrl;
    this.contentType = data.headers.contentType;
    this.accept = data.headers.accept;
  }

  async updateBooking(token, payload, bookingId) {
    const response = await request(this.host)
      .put(`/booking/${bookingId}`)
      .set("Content-Type", this.contentType)
      .set("Accept", this.accept)
      .set("Cookie", `token=${token}`)
      .send(payload);

    return response;
  }
}
module.exports = update;

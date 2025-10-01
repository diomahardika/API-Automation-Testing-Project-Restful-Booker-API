const { expect } = require("chai");
const request = require("supertest");
const data = require("../../config/config.js");

class detail {
  constructor() {
    this.host = data.baseUrl;
    this.header = data.headers.accept;
  }
  async detailBooking(bookingId) {
    const response = await request(this.host)
      .get(`/booking/${bookingId}`)
      .set("Accept", this.header)
    return response;
  }
}

module.exports = detail;

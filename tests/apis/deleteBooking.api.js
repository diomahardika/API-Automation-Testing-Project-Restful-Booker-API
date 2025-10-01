const { expect } = require("chai");
const request = require("supertest");
const data = require("../../config/config.js");

class deleteData {
  constructor() {
    this.host = data.baseUrl;
    this.contentType = data.headers.contentType;
    this.accept = data.headers.accept;
  }

  async deleteBooking(token, bookingId) {
    const response = await request(this.host)
      .delete(`/booking/${bookingId}`)
      .set("Content-Type", this.contentType)
      .set("Accept", this.accept)
      .set("Cookie", `token=${token}`);

    return response;
  }
}
module.exports = deleteData;

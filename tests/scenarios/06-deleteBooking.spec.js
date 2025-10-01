const { expect } = require("chai");
const request = require("supertest");
const config = require("../../config/config.js");
const auth = require("../apis/auth.api.js");
const create = require("../apis/createBooking.api.js");
const deleteData = require("../apis/deleteBooking.api.js");
const bookingData = require("../../data/booking.data.json");

describe("DELETE - Delete Booking", () => {
  let token = "";
  let bookingId = "";

  before(async () => {
    const response = await new auth().login(config.credentials);
    token = response.body.token;
  });
  before(async () => {
    const response = await new create().createBooking(bookingData.validBooking);
    bookingId = response.body.bookingid;
  });
  it("DELETE - Delete Booking", async () => {
    const response = await new deleteData().deleteBooking(token, bookingId);
    expect(response.status).to.equal(201);
    expect(response.text).to.equal("Created");
  });
});

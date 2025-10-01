const { expect } = require("chai");
const request = require("supertest");
const auth = require("../apis/auth.api.js");
const config = require("../../config/config.js");
const create = require("../apis/createBooking.api.js");
const update = require("../apis/updateBooking.api.js");
const bookingData = require("../../data/booking.data.json");

describe("PUT - Update Booking", () => {
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
  it("PUT - Update Booking", async () => {
    const response = await new update().updateBooking(
      token,
      bookingData.updateBooking,
      bookingId
    );
    expect(response.status).to.equal(200);
  });
});

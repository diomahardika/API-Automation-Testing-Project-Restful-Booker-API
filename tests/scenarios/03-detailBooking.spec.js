const { expect } = require("chai");
const request = require("supertest");
const create = require("../apis/createBooking.api");
const detail = require("../apis/detailBooking.api");
const bookingData = require("../../data/booking.data.json")



describe("GET - Detail Booking", () => {
  let bookingId = "";

  before(async () => {
    const response = await new create().createBooking(bookingData.validBooking);
    bookingId = response.body.bookingid;
  });
  it("GET - Detail Booking", async () => {
    const response = await new detail().detailBooking(
      bookingId
    );
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("object");
  });
});

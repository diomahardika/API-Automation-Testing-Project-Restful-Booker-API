const { expect } = require("chai");
const request = require("supertest");
const create = require("../apis/createBooking.api");
const bookingData = require("../../data/booking.data.json")

describe("POST - Create Booking", () => {
  it("Create booking successfully", async () => {
    const response = await new create().createBooking(bookingData.validBooking)
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("bookingid");
    expect(response.body).to.have.property("booking");
  });
});

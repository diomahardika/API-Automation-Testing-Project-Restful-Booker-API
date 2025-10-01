const { expect } = require("chai");
const request = require("supertest");
const getData = require("../apis/getBooking.api");

describe("GET - Get All Booking data", () => {
  it("Get Booking Data", async () => {
    const response = await new getData().getBookingData();
    expect(response.status).to.eql(200);
    expect(response.body).to.be.an("array");

    console.log(response.body);
  });
});

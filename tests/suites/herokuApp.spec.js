const { expect } = require("chai");
const request = require("supertest");
const config = require("../../config/config");
const bookingData = require("../../data/booking.data.json");

const auth = require("../apis/auth.api");
const create = require("../apis/createBooking.api")
const detail = require("../apis/detailBooking.api")
const deleteData = require("../apis/deleteBooking.api")

describe("TUGAS 2 API TEST - Complete Booking HerokuApp Flow", () => {
  let token = "";
  let bookingId = "";
  let originalBooking = {};

  describe("Authentication", () => {
    it("Step 1: /POST - Get Authentication Token", async () => {
      const response = await new auth().login(config.credentials);

      expect(response.status).to.equal(200);
      token = response.body.token;
    });
  });

  describe("Booking", () => {

    it("Step 2: /POST -  Create New Booking", async () => {
      const response = await new create().createBooking(bookingData.validBooking);

      expect(response.status).to.equal(200);

      // Expect isi body sesuai dengan request body
      expect(response.body.booking.firstname).to.equal(bookingData.validBooking.firstname);
      expect(response.body.booking.lastname).to.equal(bookingData.validBooking.lastname);
      expect(response.body.booking.totalprice).to.equal(bookingData.validBooking.totalprice);
      expect(response.body.booking.depositpaid).to.equal(bookingData.validBooking.depositpaid);
      expect(response.body.booking.bookingdates.checkin).to.equal(bookingData.validBooking.bookingdates.checkin);
      expect(response.body.booking.bookingdates.checkout).to.equal(bookingData.validBooking.bookingdates.checkout);
      expect(response.body.booking.additionalneeds).to.equal(bookingData.validBooking.additionalneeds);

      bookingId = response.body.bookingid;
      originalBooking = response.body.booking
    });

    it("Step 3: /GET - Get Booking Details", async () => {
      const response = await new detail().detailBooking(bookingId);

      expect(response.status).to.equal(200);

      expect(response.body.firstname).to.equal(originalBooking.firstname);
      expect(response.body.lastname).to.equal(originalBooking.lastname);
      expect(response.body.totalprice).to.equal(originalBooking.totalprice);
      expect(response.body.depositpaid).to.equal(originalBooking.depositpaid);
      expect(response.body.bookingdates.checkin).to.equal(originalBooking.bookingdates.checkin);
      expect(response.body.bookingdates.checkout).to.equal(originalBooking.bookingdates.checkout);
      expect(response.body.additionalneeds).to.equal(originalBooking.additionalneeds);
    });

    it("Step 4: /DELETE - Delete Booking", async () => {

      const response = await new deleteData().deleteBooking(token, bookingId);

      expect(response.status).to.equal(201);
      expect(response.text).to.equal("Created");
    });
  });
});

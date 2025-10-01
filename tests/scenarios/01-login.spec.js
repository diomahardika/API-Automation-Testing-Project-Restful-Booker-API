const { expect } = require("chai");
const request = require("supertest");
const config = require("../../config/config.js");
const auth = require("../apis/auth.api.js");

describe("POST - Auth", () => {
   it("Step 1: /POST - Get Authentication Token", async () => {
      const response = await new auth().login(config.credentials);

      expect(response.status).to.equal(200);
      token = response.body.token;
    });
});

const request = require("supertest");
const app = require("./app.js");

describe("/", () => {
  test("it says hello world", async() => {
    await request(app)
      .get("/api/post/")
      .expect(200)
      .end(function(err, res) {
        console.log("err", err);
      });
  });
});